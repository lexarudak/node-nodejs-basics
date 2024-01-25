import { rename as nodeRename, access } from "fs/promises"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const currentModuleUrl = import.meta.url
const __dirname = dirname(fileURLToPath(currentModuleUrl))

const wrongFilePath = join(__dirname, "files", "wrongFilename.txt")
const properFilePath = join(__dirname, "files", "properFilename.md")
const error = new Error("FS operation failed")
const flag = "wx"

const rename = async () => {
    try {
        await nodeRename(wrongFilePath, properFilePath, { flag })
    } catch {
        throw error
    }
}

await rename();
