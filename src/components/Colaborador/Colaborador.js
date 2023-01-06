import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Colaborador = (props) => {
    //console.log(props)

    const favoritar = () => {
        props.aoFavoritar(props.colaborador.id)
    }
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
                <div className='favoritar'>
                    {props.colaborador.favorito 
                        ? <AiFillHeart onClick={favoritar} color='#ff0000'></AiFillHeart> 
                        : <AiOutlineHeart onClick={favoritar}></AiOutlineHeart> 
                    }
                </div>
            </div>
        </div>
        )
}

export default Colaborador