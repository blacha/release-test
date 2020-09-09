
module.exports ={
    handler() {
        return 'Hello World: v' + require('../package.json').version;
    }
}
