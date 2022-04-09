import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import "reset-css";


//FontAwesome 5.15.4
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faGraduationCap  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faHtml5 , faCss3Alt, faJsSquare  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faEnvelope, faGraduationCap,
            faLinkedin, faGithub, faHtml5, faCss3Alt, faJsSquare );


createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
