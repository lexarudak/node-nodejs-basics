import { createReadStream } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"
import { createHash } from "crypto";
import { pipeline } from "stream/promises"
import { Transform } from "stream"

const currentModuleUrl = import.meta.url
const __dirname = dirname(fileURLToPath(currentModuleUrl))
const filePath = join(__dirname, "files", "fileToCalculateHashFor.txt")

const calculateHash = async () => {
    const hash = createHash("sha256")
    const stream = createReadStream(filePath)
    const transformStream = new Transform({
      transform(chunk, _, callback) {
         hash.update(chunk)
         callback()
      },
      flush(callback) {
        this.push(hash.digest('hex'))
        callback()
      }  
    })

    await pipeline(stream, transformStream, process.stdout)
};

await calculateHash();