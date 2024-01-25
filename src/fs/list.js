
import { readdir } from "fs/promises"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const currentModuleUrl = import.meta.url
const __dirname = dirname(fileURLToPath(currentModuleUrl))

const pathFrom = join(__dirname, "files")
const errorMessage = "FS operation failed"

const list = async () => {
   try {
    const filesList = await readdir(pathFrom)
    console.log(filesList);
   } catch {
    throw new Error(errorMessage)
   }
};

await list();