import { createWriteStream } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"
import { pipeline } from "stream/promises"

const currentModuleUrl = import.meta.url
const __dirname = dirname(fileURLToPath(currentModuleUrl))
const filePath = join(__dirname, "files", "fileToWrite.txt")

const write = async () => {
    console.log("- Press ENTER to write row\n- Press Ctrl+C to complete\n\n*Enter your text* ");
    await pipeline(process.stdin, createWriteStream(filePath))
};

await write();