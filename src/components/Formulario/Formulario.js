import './Formulario.css'
import Campo from '../Campo/Campo.js';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';
import { useState } from 'react';

const Formulario = (props) => {

    //hook
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [cortime, setCorTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        //console.log('Form foi submetido =>', nome, cargo, imagem, time)
        props.aoColaboradorCadastrado({nome, cargo, imagem, time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const aoSalvarNovoTime = (evento) => {
        evento.preventDefault()
        props.aoCadastrarTime({nome: nomeTime, cor: cortime})
    }

    return (
        <section className='formulario-container'>
            <form className='formulario' onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo type='text' valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu nome"></Campo>
                <Campo type='text' valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"></Campo>
                <Campo type='text' valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Digite o endereco da imagem"></Campo>
                <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} obrigatorio={true} label="Time" itens={props.times}></ListaSuspensa>
                <Botao>Criar Card</Botao>
            </form>
            <form className='formulario' onSubmit={aoSalvarNovoTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo type='text' valor={nomeTime} aoAlterado={valor => setNomeTime(valor)} obrigatorio={true} label="Nome" placeholder="Digite nome do time"></Campo>
                <Campo type='color' valor={cortime} aoAlterado={valor => setCorTime(valor)} obrigatorio={true} label="Cor" placeholder="Digite a cor"></Campo>
                <Botao>Criar Time</Botao>
            </form>
        </section>
    )
}

export default Formulario