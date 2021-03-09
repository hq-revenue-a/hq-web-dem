const name = process.env.NAME || 'no-name';
const id = process.env.HQREF || 'no-id';
const version = process.env.VERSION || 'no-version';
const city = process.env.CITY ? '' + process.env.CITY : '';

function main() {
    alert(`Hello ${name}:${id} I use version ${version}${city}`)
}

main();