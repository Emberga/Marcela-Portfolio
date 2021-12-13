import { createApp } from 'vue'
import App from './App.vue';
import Hero from './components/hero.vue';
import Projects from './components/projects.vue';
import About from './components/about.vue';
import Contact from './components/contact.vue';
import Footer from './components/footer.vue';
const app = createApp(App);


app.component('hero', Hero);
app.component('projects', Projects);
app.component('about', About);
app.component('contact', Contact);
app.component('footer-view', Footer);
app.mount('#app');