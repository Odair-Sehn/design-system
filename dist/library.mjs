import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import { resolveComponent, openBlock, createElementBlock, createVNode, normalizeStyle } from 'vue';

var script$1 = {
  name: 'dass-button',
  props: {
    color: String,
    textColor: String,
    label: String
  },
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = resolveComponent("q-btn");

  return (openBlock(), createElementBlock("div", null, [
    createVNode(_component_q_btn, {
      style: normalizeStyle(`background-color: ${$props.color}; color: ${$props.textColor}`),
      label: $props.label
    }, null, 8 /* PROPS */, ["style", "label"])
  ]))
}

script$1.render = render$1;
script$1.__file = "src/components/dass-button/dass-button.vue";

var script = {
  name: 'dass-input',
  props: {
    label: String,
    placeholder: String
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_input = resolveComponent("q-input");

  return (openBlock(), createElementBlock("div", null, [
    createVNode(_component_q_input, {
      label: $props.label,
      placeholder: $props.placeholder
    }, null, 8 /* PROPS */, ["label", "placeholder"])
  ]))
}

script.render = render;
script.__file = "src/components/dass-input/dass-input.vue";

var components = {
    DassButton: script$1,
    DassInput: script
};

const plugin = {
  install (Vue) {
    Vue.use(Quasar, {
      plugins: {}, // import Quasar plugins and add here
    });
    
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

export { plugin as default };
