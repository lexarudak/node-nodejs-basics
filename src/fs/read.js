import { readFile } from "fs/promises"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const currentModuleUrl = import.meta.url
const __dirname = dirname(fileURLToPath(currentModuleUrl))

const filePath = join(__dirname, "files", "fileToRead.txt")
const errorMessage = "FS operation failed"

const read = async () => {
    try {
        const buffer = await readFile(filePath)
        console.log(buffer.toString());
    } catch {
        throw new Error(errorMessage)
    }
};

await read();