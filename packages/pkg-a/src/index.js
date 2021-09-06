
module.exports ={
    handler() {
        return `Hello W ${require('../package.json').version}`;
    }
}
