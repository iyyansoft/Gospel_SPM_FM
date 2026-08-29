import fs from 'fs';

const buffer = fs.readFileSync('public/channels_sprite.png');
const width = buffer.readInt32BE(16);
const height = buffer.readInt32BE(20);

console.log({ width, height });
