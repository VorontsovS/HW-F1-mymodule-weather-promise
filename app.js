const mymodule = require('./mymodule');

// lvl 1
//mymodule('Kyev, UA');

// lvl 2
const init = async () => {
    const temp = await mymodule('Kyev, UA');
    console.log(temp);
}

init();