
module.exports ={
    handler() {
        console.log('Hello World: v' + require('../package.json').version)
    }
}
