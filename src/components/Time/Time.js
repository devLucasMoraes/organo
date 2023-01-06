import Colaborador from '../Colaborador/Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    //console.log(props)
    return (
        (props.colaboradores.length > 0) ?
        <section className='time' style={{ backgroundColor: hexToRgba(props.time.cor, 0.3)}}>
            <input onChange={evento => props.aoMudarCor(evento.target.value, props.time.id)} value={props.time.cor} type='color' className='input-cor'></input>
            <h3 style={{borderColor: props.time.cor}}>{props.time.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores
                    .map(colaborador => {
                        const colaboradorJSXelement = <Colaborador 
                                                        key={colaborador.nome}
                                                        colaborador={colaborador} 
                                                        cor={props.time.cor}
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