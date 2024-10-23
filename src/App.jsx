import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import Component from './components/Component.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  function handleSelect(selectedButton) {
    console.log('Hello, Button! - ' + selectedButton)
  }

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
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('states')}>States</TabButton>

          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
