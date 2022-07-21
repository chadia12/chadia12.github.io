"use strict";
/*eslint-disable */
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

// const grip = zlib.createGzip();
// const readable = fs.createReadStream(path.join(__dirname,'myText.txt'));
// const compressed = fs.createWriteStream(path.join(__dirname, 'dest.txt.gz'));
// readable.pipe(grip).pipe(compressed);


const unzip = zlib.createGunzip();
const readableun = fs.createReadStream(path.join(__dirname, 'dest.txt.gz'));
const uncompressed = fs.createWriteStream(path.join(__dirname, 'decomp.txt'));
readableun.pipe(unzip).pipe(uncompressed);


