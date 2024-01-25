import { writeFile } from "fs/promises";
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const filePath = join(__dirname, "files", "fresh.txt")
const message = "I am fresh and young"
const error = new Error("FS operation failed")
const flag = "wx"

const create = async () => {
    try {
        await writeFile(filePath, message, { flag })
    } catch {
        throw error
    }
};

await create();
