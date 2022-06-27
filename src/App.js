import "./Mensaje"
import Miprimercomponente from "./Mensaje";
import './App.css';
const holamundo= "Hola mundo desde Variable"




  const Bootcamp=()=>{
    return <p>Esta es la app del curso React.js</p>  }

function App() {
  return (
    
    <div className="App">
      <Miprimercomponente msg="Hola probando params" color="red"/>
      {holamundo}
      <Bootcamp/>
      <h1>Trabajando en la pagina</h1>
      
      <strong>Proximamente</strong>
    </div>
  );
}

export default App;
