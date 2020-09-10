
module.exports ={
    handler() {
        return `Hello World ${require('../package.json').version}`;
    }
}
