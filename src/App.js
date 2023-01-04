import Banner from './components/Banner/Banner';
import CampoTexto from './components/CampoTexto/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <CampoTexto label="Nome" placeholder="Digite seu nome"></CampoTexto>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
      <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem"></CampoTexto>
    </div>
  );
}

export default App;
