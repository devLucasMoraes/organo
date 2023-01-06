import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Colaborador = (props) => {
    //console.log(props)
    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                className='deletar' 
                onClick={() => props.aoDeletar(props.colaborador.id)}>
            </AiFillCloseCircle>
            <div className='cabecalho' style={{ backgroundColor: props.cor}}>
                <img src={props.colaborador.imagem} alt={props.colaborador.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{props.colaborador.nome}</h4>
                <h5>{props.colaborador.cargo}</h5>
            </div>
        </div>
        )
}

export default Colaborador