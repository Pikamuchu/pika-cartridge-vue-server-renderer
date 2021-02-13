const sinon = require('sinon');
const { assert } = require('chai');
const searchquire = require('searchquire');

describe('vue-server-renderer library', () => {
    let Vue;
    let vueServerRenderer;

    before(() => {
        // initialize test config and spies
        const cartridgeConfig = {
            basePath: '../cartridges/lib_vue-server-renderer/cartridge',
            pattern: '*/cartridge/(.*)',
            maxSearchModuleIterations: 20
        };
        Vue = searchquire('*/cartridge/scripts/lib/vue/index', cartridgeConfig);
        vueServerRenderer = searchquire('*/cartridge/scripts/lib/vue-server-renderer/index', cartridgeConfig);
    });

    beforeEach(() => {
        // reset spies
    });

    describe('vue-server-renderer initialization', () => {
        it('vue-server-renderer defined', () => {
            assert.isDefined(vueServerRenderer);
        });

        it('should work', done => {
            vueServerRenderer(
                new Vue({
                    template: `
                <div>
                  <p class="hi">yoyo</p>
                  <div id="ho" :class="{ red: isRed }"></div>
                  <span>{{ test }}</span>
                  <input :value="test">
                  <img :src="imageUrl">
                  <test></test>
                  <test-async></test-async>
                </div>
              `,
                    data: {
                        test: 'hi',
                        isRed: true,
                        imageUrl: 'https://vuejs.org/images/logo.png'
                    },
                    components: {
                        test: {
                            render() {
                                return this.$createElement('div', { class: ['a'] }, 'test');
                            }
                        },
                        testAsync(resolve) {
                            resolve({
                                render() {
                                    return this.$createElement('span', { class: ['b'] }, 'testAsync');
                                }
                            });
                        }
                    }
                }),
                (err, result) => {
                    assert.isNull(err);
                    assert.include(
                        result,
                        '<div data-server-rendered="true">' +
                            '<p class="hi">yoyo</p> ' +
                            '<div id="ho" class="red"></div> ' +
                            '<span>hi</span> ' +
                            '<input value="hi"> ' +
                            '<img src="https://vuejs.org/images/logo.png"> ' +
                            '<div class="a">test</div> ' +
                            '<span class="b">testAsync</span>' +
                            '</div>'
                    );
                    done();
                }
            );
        });

        // #5941
        it('should work peoperly when accessing $ssrContext in root component', done => {
            let ssrContext;
            vueServerRenderer(
                new Vue({
                    template: '<div></div>',
                    created() {
                        ssrContext = this.$ssrContext;
                    }
                }),
                err => {
                    assert.isNull(err);
                    assert.isUndefined(ssrContext);
                    done();
                }
            );
        });
    });
});
