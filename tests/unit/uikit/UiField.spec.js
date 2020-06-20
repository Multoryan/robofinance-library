import { shallowMount } from '@vue/test-utils';
import UiField from '@/components/uikit/UiField';

const appendSelector = '.ui-field__append';
const inputSelector = 'input';

describe('UiField - Поле ввода', () => {
    describe('Разметка', () => {
        it('Поле ввода применяет параметры на input', () => {
            const wrapper = shallowMount(UiField, {
                attrs: {
                    placeholder: 'Test',
                    type: 'email',
                },
            });
            wrapper.setProps({ placeholder: 'Test', type: 'email' });
            const input = wrapper.find(inputSelector);

            expect(input.attributes().placeholder).toBe('Test');
            expect(input.attributes().type).toBe('email');
        });

        it('Слот не отображается, если не передан', () => {
            const wrapper = shallowMount(UiField);
            expect(wrapper.find(appendSelector).exists()).toBeFalsy();
        });

        it('Отображается слот, если передан', () => {
            const wrapper = shallowMount(UiField, {
                slots: {
                    append: 'test',
                },
            });
            expect(wrapper.find(appendSelector).text()).toBe('test');
        });
    });

    describe('Поведение', () => {
        describe('Параметр append', () => {
            let wrapper;

            beforeEach(() => {
                wrapper = shallowMount(UiField);
            });

            it('Если параметр не передан, то к input не применяется стиль paddingRight', () => {
                expect(wrapper.find(inputSelector).element.style.paddingRight).toBeFalsy();
            });

            it('Если параметр передан, но не указан append то он не применяется к input', done => {
                wrapper.setProps({ append: '48px' });
                wrapper.vm.$nextTick(() => {
                    expect(wrapper.find(inputSelector).element.style.paddingRight).toBeFalsy();
                    done();
                });
            });

            it('Если передан и параметр и слот, то стиль применяется', () => {
                const wrapperWithSlot = shallowMount(UiField, {
                    propsData: {
                        append: '48px',
                    },
                    slots: {
                        append: 'test',
                    },
                });
                expect(wrapperWithSlot.find(inputSelector).element.style.paddingRight).toBe('48px');
            });
        });

        describe('Параметр value', () => {
            it('По умолчанию поле ввода пустое', () => {
                const wrapper = shallowMount(UiField);
                expect(wrapper.find(inputSelector).element.value).toBe('');
            });

            it('При изменении value меняется и аттрибут в input', done => {
                const wrapper = shallowMount(UiField);
                wrapper.setProps({ value: 'test' });
                wrapper.vm.$nextTick(() => {
                    expect(wrapper.find(inputSelector).element.value).toBe('test');
                    done();
                });
            });
        });
    });
});
