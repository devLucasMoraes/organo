import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Colaborador = (props) => {
   
    return (
        <div className='colaborador'>
            <AiFillCloseCircle className='deletar' onClick={props.aoDeletar}></AiFillCloseCircle>
            <div className='cabecalho' style={{ backgroundColor: props.cor}}>
                <img src={props.img} alt='Lucas Moraes'></img>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
        )
}

export default Colaborador