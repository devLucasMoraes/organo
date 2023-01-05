import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

const Time = (props) => {
    //console.log(props)
    return (
        (props.colaboradores.length > 0) ?
        <section className='time' style={{ backgroundColor: props.corSecundaria}}>
            <input onChange={evento => props.aoMudarCor(evento.target.value, props.nome)} value={props.corPrimaria} type='color' className='input-cor'></input>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores
                    .map(colaborador => {
                        const colaboradorJSXelement = <Colaborador 
                                                        key={colaborador.nome} 
                                                        nome={colaborador.nome} 
                                                        cargo={colaborador.cargo} 
                                                        img={colaborador.imagem} 
                                                        corPrimaria={props.corPrimaria}
                                                        aoDeletar={props.aoDeletar}>
                                                    </Colaborador>;
                        //console.log(colaboradorJSXelement)
                        return colaboradorJSXelement
                    })}
            </div>
        </section>
        : ''
    )
}

export default Time