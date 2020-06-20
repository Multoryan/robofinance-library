import { shallowMount } from '@vue/test-utils';
import UiButton from '@/components/uikit/UiButton';

describe('UiButton - Кнопка', () => {
    describe('Параметры', () => {
        describe('element - Управление тегом', () => {
            let wrapper;

            beforeEach(() => {
                wrapper = shallowMount(UiButton, {
                    stubs: ['router-link'],
                });
            });

            it('По умолчанию компонент является кнопкой', () => {
                expect(wrapper.element.tagName.toLowerCase()).toBe('button');
            });

            it('Внутрення ссылка', done => {
                wrapper.setProps({ element: 'router-link' });
                wrapper.vm.$nextTick(() => {
                    expect(wrapper.element.tagName.toLowerCase()).toBe('router-link-stub');
                    done();
                });
            });

            it('Внешняя ссылка', done => {
                wrapper.setProps({ element: 'a' });
                wrapper.vm.$nextTick(() => {
                    expect(wrapper.element.tagName.toLowerCase()).toBe('a');
                    done();
                });
            });
        });

        describe('view - Вид отображения', () => {
            it('По умолчанию установлено wrapper', () => {
                const wrapper = shallowMount(UiButton);
                expect(wrapper.classes()).toContain('ui-button--wrapper');
            });

            it('При смене вида устанавливается другой класс', done => {
                const wrapper = shallowMount(UiButton);
                wrapper.setProps({ view: 'primary' });
                wrapper.vm.$nextTick(() => {
                    expect(wrapper.classes()).toContain('ui-button--primary');
                    expect(wrapper.classes()).not.toContain('ui-button--wrapper');
                    done();
                });
            });
        });
    });

    describe('Слот по умолчанию', () => {
        it('Не отображается ничего, если не передано', () => {
            const wrapper = shallowMount(UiButton);
            expect(wrapper.text()).toBeFalsy();
        });

        it('Отображается переданный контент', () => {
            const wrapper = shallowMount(UiButton, {
                slots: {
                    default: 'test',
                },
            });
            expect(wrapper.text()).toBeTruthy();
        });
    });
});
