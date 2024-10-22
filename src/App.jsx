import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import Component from './components/Component.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            <Component {...CORE_CONCEPTS[0]}/>
            <Component {...CORE_CONCEPTS[1]}/>
            <Component {...CORE_CONCEPTS[2]}/>
            <Component {...CORE_CONCEPTS[3]}/>
            
          </ul>
        
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>States</TabButton>

          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
