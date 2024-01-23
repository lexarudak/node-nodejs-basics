import { rename as nodeRename, access } from "fs/promises"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const currentModuleUrl = import.meta.url
const __dirname = dirname(fileURLToPath(currentModuleUrl))

const wrongFilePath = join(__dirname, "files", "wrongFilename.txt")
const properFilePath = join(__dirname, "files", "properFilename.md")
const errorMessage = "FS operation failed"

const checkFileExist = () => new Promise(async(res, rej) => {
    try {
        await access(properFilePath)
        rej(new Error(errorMessage))
    } catch {
        res()
    }
})

const rename = async () => {
    try {
        await checkFileExist()
        await nodeRename(wrongFilePath, properFilePath)
    } catch {
        throw new Error(errorMessage)
    }
}

await rename();
