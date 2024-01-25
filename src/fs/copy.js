import { readdir, mkdir, copyFile } from "fs/promises"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const currentModuleUrl = import.meta.url
const __dirname = dirname(fileURLToPath(currentModuleUrl))

const pathFrom = join(__dirname, "files")
const pathTo = join(__dirname, "files_copy")
const errorMessage = "FS operation failed"

const errorHandler = (e) => {
    if (e) throw new Error(errorMessage)
}

const createNewDir = async () => {
    try {
        await mkdir(pathTo)
    } catch (e) {
        errorHandler(e)
    }
    
}

const copy = async () => {
    try {
        const filesList = await readdir(pathFrom)
        await createNewDir()

        const promiseArr = filesList.map((fileName) => copyFile(join(pathFrom, fileName), join(pathTo, fileName)))
        await Promise.all(promiseArr);
    } catch (e) {
        errorHandler(e)
    }
    
};

await copy();
