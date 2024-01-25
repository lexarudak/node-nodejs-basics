import { createReadStream, createWriteStream } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"
import { pipeline } from "stream/promises"
import { createGunzip } from 'zlib';

const currentModuleUrl = import.meta.url
const __dirname = dirname(fileURLToPath(currentModuleUrl))
const filePath = join(__dirname, "files", "fileToCompress.txt")
const archPath = join(__dirname, "files", "archive.gz")

const decompress = async () => {
    const readStream = createReadStream(archPath)
    const writeStream = createWriteStream(filePath)
    const gzip = createGunzip()

    try {
        await pipeline(
            readStream,
            gzip,
            writeStream,
        )
    } catch {
       throw new Error('Oops... Maybe, you have no archive?');
    }
    
};

await decompress();