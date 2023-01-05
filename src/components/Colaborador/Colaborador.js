import './Colaborador.css'

const Colaborador = (props) => {
   
    return (
        <div className='colaborador'>
            <div className='deletar' onClick={props.aoDeletar}>deletar</div>
            <div className='cabecalho' style={{ backgroundColor: props.corPrimaria}}>
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