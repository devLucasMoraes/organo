import './CampoTexto.css'

const CampoTexto = (props) => {
    //console.log(props)

    let valor = 'Lucas'

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto