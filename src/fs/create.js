import { access, writeFile, F_OK } from "fs";

const filePath = "src/fs/files/fresh.txt"
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