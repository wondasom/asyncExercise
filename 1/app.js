
const shopForBeans = require('./library.js');

const getBeans = async () => {
    console.log(`1. Heading to the store to buy beans...`);
    let value = await shopForBeans();
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`)
}

getBeans();