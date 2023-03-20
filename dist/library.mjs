import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import { openBlock, createElementBlock, resolveComponent, createBlock, withCtx, createVNode, createElementVNode } from 'vue';

var script$3 = {
  name: 'InputText'
};

const _hoisted_1$1 = { type: "text" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1$1))
}

script$3.render = render$3;
script$3.__file = "src/InputText.vue";

var script$2 = {
  name: 'InputMustafa'
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_input = resolveComponent("q-input");

  return (openBlock(), createBlock(_component_q_input, { label: "Descrição" }))
}

script$2.render = render$2;
script$2.__file = "src/InputMustafa.vue";

var script$1 = {
  name: 'InputTextarea'
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("textarea"))
}

script$1.render = render$1;
script$1.__file = "src/InputTextarea.vue";

var script = {
  name: 'InputMustafaError'
};

const _hoisted_1 = /*#__PURE__*/createElementVNode("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo.svg" }, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_avatar = resolveComponent("q-avatar");
  const _component_q_input = resolveComponent("q-input");

  return (openBlock(), createBlock(_component_q_input, {
    color: "teal",
    outlined: "",
    modelValue: _ctx.text,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.text) = $event)),
    label: "Label"
  }, {
    append: withCtx(() => [
      createVNode(_component_q_avatar, null, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"]))
}

script.render = render;
script.__file = "src/InputMustafaError.vue";

var components = { InputTextarea: script$1, InputText: script$3, InputMustafa: script$2, InputMustafaError: script };

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
