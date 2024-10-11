import Vue from "vue"
import VueI18n from "vue-i18n"
import zh from "./config/zh"

Vue.use(VueI18n)

let langFileds = require.context('./config', false, /\.js$/)

let regExp = /\.\/([^\.\/]+)\.([^\.]+)$/ //正则用于匹配 ./en.js中的en

regExp.exec()

let messages = {}

langFileds.keys().forEach(
    key => {
        let prop = regExp.exec(key)[1]
        messages[prop] = langFileds(key).default
    }
)

export default new VueI18n({
    locale : "zh",
    messages
})