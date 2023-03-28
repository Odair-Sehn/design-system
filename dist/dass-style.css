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

var css_248z = "/**\n * DS-UI THEME FILE\n *\n * This theme file has the default values used by the Design System.\n * Colors, typography rules, borders are all defined by your theme\n * file and customize the entire system in a single place.\n *\n * You can create a theme file by copying this file and changing its\n * values, then adding it to your application. The DS will replace its\n * default values with your theme values accordingly.\n **/\n\n :root {\n    /* Border Radius */\n    --dass-border-radius-sm: 2px;\n    --dass-border-radius-md: 4px;\n    --dass-border-radius-lg: 8px;\n  \n    /* Color: Brand */\n    --dass-color--brand: #cb3645;\n    --dass-color--brand__light: #f4c7cb;\n    --dass-color--brand__lighter: #ffe8ea;\n    --dass-color--brand__dark: #992934;\n    --dass-color--brand__darker: #4d151a;\n  \n    /* Color: Primaries */\n    --dass-color--primary: var(--dass-color--brand);\n    --dass-color--primary__light: var(--dass-color--brand__light);\n    --dass-color--primary__lighter: var(--dass-color--brand__lighter);\n    --dass-color--primary__dark: var(--dass-color--brand__dark);\n    --dass-color--primary__darker: var(--dass-color--brand__darker);\n  \n    /* Color: Secondaries (Blue) */\n    --dass-color--blue: #00a2c7;\n    --dass-color--blue__light: #82c9d9;\n    --dass-color--blue__lighter: #d5eff5;\n    --dass-color--blue__dark: #006c85;\n    --dass-color--blue__darker: #004352;\n  \n    /* Color: Secondaries (Green) */\n    --dass-color--green: #c1e54e;\n    --dass-color--green__light: #e5fc9c;\n    --dass-color--green__lighter: #eefac7;\n    --dass-color--green__dark: #97b33d;\n    --dass-color--green__darker: #6c7f2b;\n  \n    /* Color: Secondaries (Yellow) */\n    --dass-color--yellow: #ffc62d;\n    --dass-color--yellow__light: #fee296;\n    --dass-color--yellow__lighter: #fff3d4;\n    --dass-color--yellow__dark: #cca43a;\n    --dass-color--yellow__darker: #403817;\n  \n    /* Color: Secondaries (Orange) */\n    --dass-color--orange: #ff6a13;\n    --dass-color--orange__light: #ff995e;\n    --dass-color--orange__lighter: #ffd1b7;\n    --dass-color--orange__dark: #d84f01;\n    --dass-color--orange__darker: #b54504;\n  \n    /* Neutrals */\n    --dass-color-neutral__100: #1f1f22;\n    --dass-color-neutral__90: #2f3033;\n    --dass-color-neutral__70: #585b60;\n    --dass-color-neutral__50: #83878e;\n    --dass-color-neutral__30: #adb2bc;\n    --dass-color-neutral__15: #ced1d7;\n    --dass-color-neutral__07: #eeeef0;\n    --dass-color-neutral__03: #fafafa;\n    --dass-color-neutral__00: #ffffff;\n  \n    /* Color: Status */\n    --dass-color-status--success: #72cc31;\n    --dass-color-status--success__light: #bef298;\n    --dass-color-status--success__dark: #3e6d1c;\n  \n    --dass-color-status--error: #af095b;\n    --dass-color-status--error__light: #ffafd6;\n    --dass-color-status--error__dark: #660033;\n  \n    --dass-color-status--warning: #efa002;\n    --dass-color-status--warning__light: #ffda92;\n    --dass-color-status--warning__dark: #de620b;\n  \n    --dass-color-status--info: #2196f3;\n    --dass-color-status--info__light: #99e1ff;\n    --dass-color-status--info__dark: #015aa0;\n  \n    /* Color: Text */\n    --dass-color-text--dark__100: #1f1f22;\n    --dass-color-text--dark__90: #2f3033;\n    --dass-color-text--dark__70: #565a60;\n    --dass-color-text--dark__50: #83878e;\n    --dass-color-text--dark__30: #adb2bc;\n    --dass-color-text--light__15: #ced1d7;\n    --dass-color-text--light__07: #eeeef0;\n    --dass-color-text--light__03: #fafafa;\n    --dass-color-text--light__00: #ffffff;\n  \n    /* Font Stacks */\n    --font-family--base: \"Roboto\", \"Helvetica Neue\", Helvetica, \"Nimbus Sans L\",\n      Arial, sans-serif;\n    --font-family--system: \"Inter\", system-ui, sans-serif;\n    --font-family--icons: \"Dass Symbols\";\n    --base-font-size: 16px;\n  \n    /* Typography: Display */\n    --dass-font-display--1: 700 4rem/1.3 var(--font-family--system);\n    --dass-font-display--2: 700 3.5rem/1.3 var(--font-family--system);\n    --dass-font-display--3: 700 3rem/1.3 var(--font-family--system);\n    --dass-font-display--4: 700 2.5rem/1.3 var(--font-family--system);\n  \n    /* Typography: Headings */\n    --dass-font-heading--1: 2.125rem/2.75rem var(--font-family--system);\n    --dass-font-heading--1__regular: 400 var(--dass-font-heading--1);\n    --dass-font-heading--1__bold: 700 var(--dass-font-heading--1);\n  \n    --dass-font-heading--2: 1.75rem/2.25rem var(--font-family--system);\n    --dass-font-heading--2__regular: 400 var(--dass-font-heading--2);\n    --dass-font-heading--2__bold: 700 var(--dass-font-heading--2);\n  \n    --dass-font-heading--3: 1.375rem/1.75rem var(--font-family--system);\n    --dass-font-heading--3__regular: 400 var(--dass-font-heading--3);\n    --dass-font-heading--3__bold: 700 var(--dass-font-heading--3);\n  \n    --dass-font-heading--4: 1.25rem/1.625rem var(--font-family--system);\n    --dass-font-heading--4__regular: 400 var(--dass-font-heading--4);\n    --dass-font-heading--4__medium: 500 var(--dass-font-heading--4);\n    --dass-font-heading--4__bold: 700 var(--dass-font-heading--4);\n  \n    --dass-font-heading--5: 1.125rem/1.625rem var(--font-family--system);\n    --dass-font-heading--5__regular: 400 var(--dass-font-heading--5);\n    --dass-font-heading--5__medium: 500 var(--dass-font-heading--5);\n    --dass-font-heading--5__bold: 700 var(--dass-font-heading--5);\n  \n    --dass-font-body--default: 1rem/1.5625 var(--font-family--base);\n    --dass-font-body--default__regular: 400 var(--dass-font-body--default);\n    --dass-font-body--default__bold: 700 var(--dass-font-body--default);\n  \n    --dass-font-body--small: 0.875rem/1.125rem var(--font-family--base);\n    --dass-font-body--small__regular: 400 var(--dass-font-body--small);\n    --dass-font-body--small__bold: 700 var(--dass-font-body--small);\n  \n    --dass-font-body--caption: 0.8125rem/1.125rem var(--font-family--base);\n    --dass-font-body--caption__regular: 400 var(--dass-font-body--caption);\n    --dass-font-body--caption__bold: 700 var(--dass-font-body--caption);\n  \n    --dass-font-body--caption-small: 0.625rem/0.875rem var(--font-family--base);\n    --dass-font-body--caption-small__regular: 400 var(--dass-font-body--caption-small);\n    --dass-font-body--caption-small__bold: 700 var(--dass-font-body--caption-small);\n  \n    /* Shadows */\n    --dass-shadow-sm: 0px 4px 16px;\n    --dass-shadow-md: 0px 8px 16px;\n    --dass-shadow-lg: 0px 12px 16px;\n    --dass-shadow-focus: solid 2px;\n  \n    /* Gaps */\n    --space__6x: calc(var(--space) * 6);\n    --space__5-5x: calc(var(--space) * 5.5);\n    --space__5x: calc(var(--space) * 5);\n    --space__4-5x: calc(var(--space) * 4.5);\n    --space__4x: calc(var(--space) * 4);\n    --space__3-5x: calc(var(--space) * 3.5);\n    --space__3x: calc(var(--space) * 3);\n    --space__2-5x: calc(var(--space) * 2.5);\n    --space__2x: calc(var(--space) * 2);\n    --space__1-5x: calc(var(--space) * 1.5);\n    --space: 1rem;\n    --space__0-75x: calc(var(--space) * 0.75);\n    --space__0-5x: calc(var(--space) * 0.5);\n    --space__0-25x: calc(var(--space) * 0.25);\n    --space__0-125x: calc(var(--space) * 0.125);\n  }";
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
