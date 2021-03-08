const name = process.env.NAME || 'no-name';
const hotel = process.env.HOTEL || 'no-hotel-name';
const version = process.env.VERSION || 'no-version';

function main() {
    alert(`Hello ${name} I use version ${version}: hotel: ${hotel}`)
}

main();