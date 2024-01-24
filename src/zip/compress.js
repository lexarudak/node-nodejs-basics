import { createReadStream, createWriteStream } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"
import { createHash } from "crypto";
import { pipeline } from "stream/promises"

import { createGzip } from 'zlib';

const currentModuleUrl = import.meta.url
const __dirname = dirname(fileURLToPath(currentModuleUrl))
const filePath = join(__dirname, "files", "fileToCompress.txt")
const archPath = join(__dirname, "files", "archive.gz")

const compress = async () => {
    const readStream = createReadStream(filePath)
    const writeStream = createWriteStream(archPath)
    const gzip = createGzip()

    await pipeline(
        readStream,
        gzip,
        writeStream
    )
};

await compress();