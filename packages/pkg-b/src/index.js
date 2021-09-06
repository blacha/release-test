import * as pkgA from '@blacha/pkg-a';

module.exports ={
    handler() {
        return pkgA.handler('Chicken') + pkgA.handler('Fish');
    }
}
