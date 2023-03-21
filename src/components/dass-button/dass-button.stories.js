import DassButton from './dass-button.vue';

export default {
  title: 'Components/Button',
  component: DassButton
};

const Template = (args) => ({
  components: { DassButton },
  setup() {
    return { args }
  },
  template: '<DassButton v-bind="args"/>',
});

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  color: 'var(--color-primary)',
  textColor: 'white'
}