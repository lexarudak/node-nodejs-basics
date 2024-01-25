import { sep, join, dirname, basename } from 'path';
import { fileURLToPath } from "url"
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile } from "fs/promises"
import "./files/c.js"

const currentModuleUrl = import.meta.url
const __filename = fileURLToPath(currentModuleUrl)
const __dirname = dirname(__filename)

const isBigger = Math.random() > 0.5

const buffer = await readFile(join(__dirname, "files", isBigger ? "a.json" : "b.json"))
const unknownObject = JSON.parse(buffer.toString())

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

console.log(unknownObject);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});


export {
  unknownObject,
  myServer
}