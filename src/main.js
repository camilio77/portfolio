import { createApp } from 'vue'
import App from './App.vue'
import HeaderComponent from './components/header.vue'
import MainComponent from './components/main.vue'
import FooterComponent from './components/footer.vue'
// import CustomCursor from './components/mouse.vue'
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

createApp(App).mount('#app')
// createApp(CustomCursor).mount('#cursor')
createApp(HeaderComponent).mount('#header')
createApp(MainComponent).mount('#main')
createApp(FooterComponent).mount('#footer')

const driverObj = driver({
    showProgress: true,
    steps: [
      { element: '#tour-example', popover: { title: 'Welcome to my portfolio :D', description: 'Let me give to you a little tutorial', side: "left", align: 'start' }},
      { element: '.vsc-footer .part1 .links', popover: { title: 'Links', description: 'Over here you will find the links to my github and linkedin pages', side: "bottom", align: 'end' }},
      { element: '.vsc-sidebar', popover: { title: 'Main data', description: 'Over here you will find all the principal data about me', side: "bottom", align: 'start' }},
      { element: '#projects', popover: {description: 'Here are my projects', side: "left", align: 'start' }},
      { element: '#skills', popover: {description: 'Here are my skills and habilities', side: "top", align: 'start' }},
      { element: '#documents', popover: {description: 'Here you will find some intresting documents like my CV', side: "right", align: 'start' }},
      { element: '#about', popover: {description: 'Here you will find more about me', side: "right", align: 'start' }},
      { element: '#languajes', popover: {description: 'Here you will find the languajes that i spoke', side: "right", align: 'start' }},
      { popover: { title: 'Explore!!', description: 'And that is all, now you can check this webpage :)' } }
    ]
  });
  
  driverObj.drive();
