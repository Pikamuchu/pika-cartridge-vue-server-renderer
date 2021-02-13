if (typeof process === 'object' && process.env.NODE_ENV === 'development') {
    module.exports = require('./vue.runtime.common.dev.js');
} else {
    module.exports = require('./vue.runtime.common.prod.js');
}
