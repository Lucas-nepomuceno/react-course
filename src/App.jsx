import reactImg from './assets/react-core-concepts.png'
import componentImg from './assets/components.png'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
const reactCharacteristics = ['aspects', 'characteristics', 'parts', 'properties'];


function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)]
  const characteristics = reactCharacteristics[genRandomInt(2)]

  return (<header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React {characteristics} you will need for almost any app you are
      going to build!
    </p>
  </header>)
} 

function Component(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            <Component title='Components' img={componentImg} content='The Core UI Building Block.'/>
            <Component/>
            <Component/>
            <Component/>
            
          </ul>
        
        </section>
      </main>
    </div>
  );
}

export default App;
