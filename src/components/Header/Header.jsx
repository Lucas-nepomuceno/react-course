
import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
const reactCharacteristics = ['aspects', 'characteristics', 'parts', 'properties'];


function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
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