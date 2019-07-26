import 'amfe-flexible'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import App from './App'
import router from './router'
import Cube from 'cube-ui'
Vue.use(Cube)
// import {
//   /* eslint-disable no-unused-vars */
//   Style,
//   // basic
//   Button,
//   Loading,
//   Tip,
//   Toolbar,
//   TabBar,
//   TabPanels,
//   // form
//   Checkbox,
//   CheckboxGroup,
//   Checker,
//   Radio,
//   RadioGroup,
//   Input,
//   Textarea,
//   Select,
//   Switch,
//   Rate,
//   Validator,
//   Upload,
//   Form,
//   // popup
//   Popup,
//   Toast,
//   Picker,
//   CascadePicker,
//   DatePicker,
//   TimePicker,
//   SegmentPicker,
//   Dialog,
//   ActionSheet,
//   Drawer,
//   ImagePreview,
//   // scroll
//   Scroll,
//   Slide,
//   IndexList,
//   Swipe,
//   Sticky,
//   ScrollNav,
//   ScrollNavBar,
//   RecycleList
// } from 'cube-ui'
// Vue.use(Button)
// Vue.use(Loading)
// Vue.use(Tip)
// Vue.use(Toolbar)
// Vue.use(TabBar)
// Vue.use(TabPanels)
// Vue.use(Checkbox)
// Vue.use(CheckboxGroup)
// Vue.use(Checker)
// Vue.use(Radio)
// Vue.use(RadioGroup)
// Vue.use(Input)
// Vue.use(Textarea)
// Vue.use(Select)
// Vue.use(Switch)
// Vue.use(Rate)
// Vue.use(Validator)
// Vue.use(Upload)
// Vue.use(Form)
// Vue.use(Popup)
// Vue.use(Toast)
// Vue.use(Picker)
// Vue.use(CascadePicker)
// Vue.use(DatePicker)
// Vue.use(TimePicker)
// Vue.use(SegmentPicker)
// Vue.use(Dialog)
// Vue.use(ActionSheet)
// Vue.use(Drawer)
// Vue.use(ImagePreview)
// Vue.use(Scroll)
// Vue.use(Slide)
// Vue.use(IndexList)
// Vue.use(Swipe)
// Vue.use(Sticky)
// Vue.use(ScrollNav)
// Vue.use(ScrollNavBar)
// Vue.use(RecycleList)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
