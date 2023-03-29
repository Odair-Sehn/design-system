import DassButton from './dass-button.vue';

export default {
  title: 'Componentes/Button',
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
  color: 'var(--dass-color--blue)',
  textColor: 'white'
}