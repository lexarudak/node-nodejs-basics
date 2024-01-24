import { pipeline } from "stream/promises"
import { Transform } from "stream"

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, _, callback) {
            this.push(`${chunk.toString().split('').reverse().join('')}\n`)
            callback()
        }
    })
    await pipeline(process.stdin, transformStream, process.stdout)
};

await transform();