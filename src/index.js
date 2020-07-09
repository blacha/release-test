var p;
async function main() {
    const accessKeyId = 'ASIAZSP744WXQPGDDHRW';
    const secretKey = 'OoRDqIASH2M/9yNw3kR5NKr6cyP7pbTfR/dutkMW'
    console.log('Lets try code scanning', { accessKeyId, secretKey})

    function extend(dest, src) {
        for (p in src)
            dest[p] = src[p];
        return dest;
    }



    const foobar = extend({}, {bar: 'foo'})
    console.log(foobar)

    const foo = Number(process.argv[2])
    console.log(foo == NaN);

    const abc = ['abc']
    console.log(abc === ['abc'])

    Object.prototype.toString = ()=> 'Hahahaha';
    Array.prototype.toString = Object.prototype.toString;
    console.log({}.toString(), abc.toString(), foobar.toString())

    // What is the point of i?
    for (var i = 0; i < abc.length; i ++) {
        console.log(abc[0])
    }
}

main().catch(console.error)
