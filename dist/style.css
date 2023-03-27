import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import { resolveComponent, openBlock, createElementBlock, createVNode, normalizeStyle } from 'vue';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/**\n * DS-UI THEME FILE\n *\n * This theme file has the default values used by the Design System.\n * Colors, typography rules, borders are all defined by your theme\n * file and customize the entire system in a single place.\n *\n * You can create a theme file by copying this file and changing its\n * values, then adding it to your application. The DS will replace its\n * default values with your theme values accordingly.\n **/\n\n :root {\n    /* Border Radius */\n    --border-radius-sm: 2px;\n    --border-radius-md: 4px;\n    --border-radius-lg: 8px;\n  \n    /* Color: Brand */\n    --color-brand: #cb3645;\n    --color-brand__light: #f4c7cb;\n    --color-brand__lighter: #ffe8ea;\n    --color-brand__dark: #992934;\n    --color-brand__darker: #4d151a;\n  \n    /* Color: Primaries */\n    --color-primary: var(--color-secondary--blue);\n    --color-primary__light: var(--color-secondary--blue__light);\n    --color-primary__lighter: var(--color-secondary--blue__lighter);\n    --color-primary__dark: var(--color-secondary--blue__dark);\n    --color-primary__darker: var(--color-secondary--blue__darker);\n  \n    /* Color: Secondaries (Blue) */\n    --color-secondary--blue: #00a2c7;\n    --color-secondary--blue__light: #82c9d9;\n    --color-secondary--blue__lighter: #d5eff5;\n    --color-secondary--blue__dark: #006c85;\n    --color-secondary--blue__darker: #004352;\n  \n    /* Color: Secondaries (Green) */\n    --color-secondary--green: #c1e54e;\n    --color-secondary--green__light: #e5fc9c;\n    --color-secondary--green__lighter: #eefac7;\n    --color-secondary--green__dark: #97b33d;\n    --color-secondary--green__darker: #6c7f2b;\n  \n    /* Color: Secondaries (Yellow) */\n    --color-secondary--yellow: #ffc62d;\n    --color-secondary--yellow__light: #fee296;\n    --color-secondary--yellow__lighter: #fff3d4;\n    --color-secondary--yellow__dark: #cca43a;\n    --color-secondary--yellow__darker: #403817;\n  \n    /* Color: Secondaries (Orange) */\n    --color-secondary--orange: #ff6a13;\n    --color-secondary--orange__light: #ff995e;\n    --color-secondary--orange__lighter: #ffd1b7;\n    --color-secondary--orange__dark: #d84f01;\n    --color-secondary--orange__darker: #b54504;\n  \n    /* Neutrals */\n    --color-neutral__100: #1f1f22;\n    --color-neutral__90: #2f3033;\n    --color-neutral__70: #585b60;\n    --color-neutral__50: #83878e;\n    --color-neutral__30: #adb2bc;\n    --color-neutral__15: #ced1d7;\n    --color-neutral__07: #eeeef0;\n    --color-neutral__03: #fafafa;\n    --color-neutral__00: #ffffff;\n  \n    /* Color: Status */\n    --color-status--success: #72cc31;\n    --color-status--success__light: #bef298;\n    --color-status--success__dark: #3e6d1c;\n  \n    --color-status--error: #af095b;\n    --color-status--error__light: #ffafd6;\n    --color-status--error__dark: #660033;\n  \n    --color-status--warning: #efa002;\n    --color-status--warning__light: #ffda92;\n    --color-status--warning__dark: #de620b;\n  \n    --color-status--info: #2196f3;\n    --color-status--info__light: #99e1ff;\n    --color-status--info__dark: #015aa0;\n  \n    /* Color: Text */\n    --color-text--dark__100: #1f1f22;\n    --color-text--dark__90: #2f3033;\n    --color-text--dark__70: #565a60;\n    --color-text--dark__50: #83878e;\n    --color-text--dark__30: #adb2bc;\n    --color-text--light__15: #ced1d7;\n    --color-text--light__07: #eeeef0;\n    --color-text--light__03: #fafafa;\n    --color-text--light__00: #ffffff;\n  \n    /* Font Stacks */\n    --font-family--base: \"Roboto\", \"Helvetica Neue\", Helvetica, \"Nimbus Sans L\",\n      Arial, sans-serif;\n    --font-family--system: \"Inter\", system-ui, sans-serif;\n    --font-family--icons: \"Dass Symbols\";\n    --base-font-size: 16px;\n  \n    /* Typography: Display */\n    --font-display--1: 800 1.5rem/1 var(--font-family--system);\n    --font-display--2: 700 3.5rem/1.3 var(--font-family--system);\n    --font-display--3: 700 3rem/1.3 var(--font-family--system);\n    --font-display--4: 700 2.5rem/1.3 var(--font-family--system);\n  \n    /* Typography: Headings */\n    --font-heading--1: 2.125rem/2.75rem var(--font-family--system);\n    --font-heading--1__regular: 400 var(--font-heading--1);\n    --font-heading--1__bold: 700 var(--font-heading--1);\n  \n    --font-heading--2: 1.75rem/2.25rem var(--font-family--system);\n    --font-heading--2__regular: 400 var(--font-heading--2);\n    --font-heading--2__bold: 700 var(--font-heading--2);\n  \n    --font-heading--3: 1.375rem/1.75rem var(--font-family--system);\n    --font-heading--3__regular: 400 var(--font-heading--3);\n    --font-heading--3__bold: 700 var(--font-heading--3);\n  \n    --font-heading--4: 1.25rem/1.625rem var(--font-family--system);\n    --font-heading--4__regular: 400 var(--font-heading--4);\n    --font-heading--4__medium: 500 var(--font-heading--4);\n    --font-heading--4__bold: 700 var(--font-heading--4);\n  \n    --font-heading--5: 1.125rem/1.625rem var(--font-family--system);\n    --font-heading--5__regular: 400 var(--font-heading--5);\n    --font-heading--5__medium: 500 var(--font-heading--5);\n    --font-heading--5__bold: 700 var(--font-heading--5);\n  \n    --font-body--default: 1rem/1.5625 var(--font-family--base);\n    --font-body--default__regular: 400 var(--font-body--default);\n    --font-body--default__bold: 700 var(--font-body--default);\n  \n    --font-body--small: 0.875rem/1.125rem var(--font-family--base);\n    --font-body--small__regular: 400 var(--font-body--small);\n    --font-body--small__bold: 700 var(--font-body--small);\n  \n    --font-body--caption: 0.8125rem/1.125rem var(--font-family--base);\n    --font-body--caption__regular: 400 var(--font-body--caption);\n    --font-body--caption__bold: 700 var(--font-body--caption);\n  \n    --font-body--caption-small: 0.625rem/0.875rem var(--font-family--base);\n    --font-body--caption-small__regular: 400 var(--font-body--caption-small);\n    --font-body--caption-small__bold: 700 var(--font-body--caption-small);\n  \n    /* Shadows */\n    --shadow-sm: 0px 4px 16px;\n    --shadow-md: 0px 8px 16px;\n    --shadow-lg: 0px 12px 16px;\n    --shadow-focus: #005c85 solid 2px;\n  \n    /* Gaps */\n    --space__6x: calc(var(--space) * 6);\n    --space__5-5x: calc(var(--space) * 5.5);\n    --space__5x: calc(var(--space) * 5);\n    --space__4-5x: calc(var(--space) * 4.5);\n    --space__4x: calc(var(--space) * 4);\n    --space__3-5x: calc(var(--space) * 3.5);\n    --space__3x: calc(var(--space) * 3);\n    --space__2-5x: calc(var(--space) * 2.5);\n    --space__2x: calc(var(--space) * 2);\n    --space__1-5x: calc(var(--space) * 1.5);\n    --space: 1rem;\n    --space__0-75x: calc(var(--space) * 0.75);\n    --space__0-5x: calc(var(--space) * 0.5);\n    --space__0-25x: calc(var(--space) * 0.25);\n    --space__0-125x: calc(var(--space) * 0.125);\n  }";
styleInject(css_248z);

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
