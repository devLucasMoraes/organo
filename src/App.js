import Banner from './components/Banner/Banner';
import CampoTexto from './components/CampoTexto/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <CampoTexto label="Nome"></CampoTexto>
      <CampoTexto label="Cargo"></CampoTexto>
      <CampoTexto label="Imagem"></CampoTexto>
    </div>
  );
}

export default App;
