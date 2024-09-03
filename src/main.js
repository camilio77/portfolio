import { createApp } from 'vue'
import HeaderComponent from './components/header.vue'
import MainComponent from './components/main.vue'
import FooterComponent from './components/footer.vue'
// import CustomCursor from './components/mouse.vue'
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

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
      { element: '#languages', popover: {description: 'Here you will find the languages that i speak', side: "right", align: 'start' }},
      { element: '#certifications', popover: {description: 'Here you will find my certifications', side: "right", align: 'start' }},
      { element: '.tab-bar', popover: { title: 'Tabs', description: 'When you open new files there are going to be over here until you close them', side: "right", align: 'start' }},
      { element: '#theme', popover: { title: 'Themes', description: 'Here you can customize the theme of the portfolio', side: "right", align: 'start'}},
      { popover: { title: 'Explore!!', description: 'And that is all, now you can check this webpage :)' } }
    ]
  });
  
  driverObj.drive();
