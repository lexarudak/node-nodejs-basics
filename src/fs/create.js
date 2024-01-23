import { access, writeFile, F_OK } from "fs";
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const currentModuleUrl = import.meta.url
const __dirname = dirname(fileURLToPath(currentModuleUrl))

const filePath = join(__dirname, "files", "fresh.txt")
const message = "I am fresh and young"
const error = new Error("FS operation failed")

const checkAndWrite = (e) => {
    if (!e) throw error
    writeFile(filePath, message, () => {})
}

const create = async () => {
    access(filePath, F_OK, checkAndWrite)
};

await create();