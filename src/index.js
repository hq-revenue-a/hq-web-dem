const name = process.env.NAME || 'no-name';
const id = process.env.HOTEL_ID || 'no-id';
const version = process.env.VERSION || 'no-version';

function main() {
    console.log(`Hello ${name}:${id} I use version ${version}`)
}

main();