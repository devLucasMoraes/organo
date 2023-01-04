import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Desing',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"></CampoTexto>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
                <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem"></CampoTexto>
                <ListaSuspensa label="Time" itens={times}></ListaSuspensa>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario