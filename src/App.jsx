

import styles from './App.module.css';

import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';

import { Projects } from './Projects/Projects';
import { Contact } from './components/Contact/Contact';
import Skills from'./components/Skills/Skills';
function App() {
  

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;
