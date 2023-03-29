import { create } from "@storybook/theming";
import logoDass from '../src/assets/brand-simple.svg'

export default create({
  base: "dark",
  brandTitle: "Dass Design System",
  brandUrl: "https://www.grupodass.com.br",
  brandImage: logoDass,

  //   Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '#00A2C7',
  barBg: '#2f3033',
  appBorderRadius: 5,

});