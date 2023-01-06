import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js';
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
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu nome"></CampoTexto>
                <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
                <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Digite o endereco da imagem"></CampoTexto>
                <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} obrigatorio={true} label="Time" itens={props.times}></ListaSuspensa>
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={aoSalvarNovoTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <CampoTexto valor={nomeTime} aoAlterado={valor => setNomeTime(valor)} obrigatorio={true} label="Nome" placeholder="Digite nome do time"></CampoTexto>
                <CampoTexto valor={cortime} aoAlterado={valor => setCorTime(valor)} obrigatorio={true} label="Cargo" placeholder="Digite a cor"></CampoTexto>
                <Botao>Criar Time</Botao>
            </form>
        </section>
    )
}

export default Formulario