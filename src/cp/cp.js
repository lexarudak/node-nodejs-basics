import { spawn } from "child_process"
import { join, dirname } from "path"
import { fileURLToPath } from "url"
import { pipeline } from "stream/promises"

const __dirname = dirname(fileURLToPath(import.meta.url))
const scriptPath = join(__dirname, 'files', 'script.js')

const spawnChildProcess = async (args) => {
    const childProcess = spawn("node", [scriptPath, ...args])

    try {
        await Promise.all([
            pipeline(process.stdin, childProcess.stdin),
            pipeline(childProcess.stdout, process.stdout, )
        ])
    } catch (e) {
        console.log(`Wow... error: ${e}`);
    }
    
};

spawnChildProcess([1, 2, 3]);
