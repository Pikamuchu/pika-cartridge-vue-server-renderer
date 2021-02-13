const sinon = require('sinon');
const { assert } = require('chai');
const searchquire = require('searchquire');

describe('vue-server-renderer library', () => {
    let vueServerRenderer;

    before(() => {
        // initialize test config and spies
        vueServerRenderer = searchquire(
            '*/cartridge/scripts/lib/vue-server-renderer/basic',
            {
                basePath: '../cartridges/lib_vue-server-renderer/cartridge',
                pattern: '*/cartridge/(.*)',
                maxSearchModuleIterations: 20
            },
            {}
        );
    });

    beforeEach(() => {
        // reset spies
    });

    describe('vue-server-renderer initialization', () => {
        it('vue-server-renderer defined', () => {
            assert.isDefined(vueServerRenderer);
        });
    });
});
