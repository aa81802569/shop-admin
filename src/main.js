import Vue from 'vue'
import App from './App.vue'
//引入elementUi
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
//引入路由模块
import VueRouter from"vue-router"
//引入登陆页面
import Login from"./pages/Login.vue"
//引入admin页面
import Admin from "./pages/Admin.vue"

//配置理由
var routes=[
  // {path:'/',rediect:'/admin/goods-list'},
  {path:'/admin',component:Admin},
  {path:'/login',component:Login}
]
//创建路由实例
var router=new VueRouter({routes})
//注册路由
Vue.use(VueRouter)
// 3.全局注册组件
Vue.use(ElementUI);

//引入axios
import axios from "axios"
//把axios绑定到vue实例的属性$axios
Vue.prototype.$axios=axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
