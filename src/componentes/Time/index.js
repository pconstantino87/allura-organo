import './Time.css';
import Colaborador from '../Colaborador'

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) ?
        <section class='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} corFundo={props.corPrimaria} nome={colaborador.nome} imagem={colaborador.imagem} time={colaborador.time}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time