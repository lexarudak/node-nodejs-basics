import { Worker } from "worker_threads"
import { join, dirname } from "path"
import { fileURLToPath } from "url"
import { cpus } from "os"

const __dirname = dirname(fileURLToPath(import.meta.url))
const workerPath = join(__dirname, "worker.js")


const performCalculations = async () => {
    const getProps = (ind) => ({
        workerData: 10 + ind
    })

    const workers = cpus().map((_, ind) => (
        new Promise((res) => {
            const worker = new Worker(workerPath, getProps(ind))
    
            worker.on('message', (result) => {
                res({
                    status: 'resolved',
                    data: result
                })
            })
    
            worker.on('error', () => {
                res({
                    status: 'error',
                    data: null
                })
            })
        })
    ));

    const results = await Promise.all(workers)
    console.log(results);
};

await performCalculations();