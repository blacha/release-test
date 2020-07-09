async function main() {
    const accessKeyId = 'ASIAZSP744WXQPGDDHRW';
    const secretKey = 'OoRDqIASH2M/9yNw3kR5NKr6cyP7pbTfR/dutkMW'
    console.log('Lets try code scanning', { accessKeyId, secretKey})

    function extend(dest, src) {
        for (p in src)
            dest[p] = src[p];
        return dest;
    }

    console.log(extend({}, {bar: 'foo'}) )

    const foo = Number(process.argv[2])
    console.log(foo == NaN);
}

main().catch(console.error)
