import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import 'animate.css'
import VueI18n from 'vue-i18n'
import localeMessage from './common/js/locale'

console.log(localeMessage)

Vue.locale = (locale) => {

};

Vue.use(VueI18n)

Vue.use(iView)

const i18n = new VueI18n({
    //locale: navigator.language,    // 语言标识
    locale: 'en-US',
    messages: localeMessage
})


let appEl = window.document.getElementById('app')

new Vue({
    i18n,
    el: appEl,
    render: h => h(App)
})