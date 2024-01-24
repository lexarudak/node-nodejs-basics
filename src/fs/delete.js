import { unlink } from "fs/promises"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const currentModuleUrl = import.meta.url
const __dirname = dirname(fileURLToPath(currentModuleUrl))

const filePath = join(__dirname, "files", "fileToRemove.txt")
const errorMessage = "FS operation failed"

const remove = async () => {
    try {
        await unlink(filePath)
    } catch {
        throw new Error(errorMessage)
    }
};

await remove();