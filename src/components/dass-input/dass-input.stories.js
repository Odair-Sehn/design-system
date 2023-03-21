import DassInput from './dass-input.vue';

export default {
  title: 'Components/Input',
  component: DassInput
};

const Template = (args) => ({
  components: { DassInput },
  setup() {
    return { args }
  },
  template: '<DassInput v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  placeholder: ''
}