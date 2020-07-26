import { shallowMount } from '@vue/test-utils';
import Landing from '../../src/components/Landing.vue';

describe('HelloWorld.vue', () => {
  it('mounts the component', () => {
    const wrapper = shallowMount(Landing, {});
    expect(wrapper.text.toString().includes("Welcome to Vuetify"));
  });
});
