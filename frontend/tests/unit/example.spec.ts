import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('mounts the component', () => {
    const wrapper = shallowMount(HelloWorld, {});
    expect(wrapper.text.toString().includes("Welcome to Vuetify"));
  });
});
