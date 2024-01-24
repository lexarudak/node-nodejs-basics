import { createReadStream } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"
import { pipeline } from "stream/promises"

const currentModuleUrl = import.meta.url
const __dirname = dirname(fileURLToPath(currentModuleUrl))
const filePath = join(__dirname, "files", "fileToRead.txt")

const read = async () => {
    await pipeline(createReadStream(filePath), process.stdout)
};

await read();