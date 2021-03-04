const name = process.env.NAME || 'no-name';
const version = process.env.VERSION || 'no-version';

function main() {
    alert(`Hello ${name} I use version ${version}`)
}

main();