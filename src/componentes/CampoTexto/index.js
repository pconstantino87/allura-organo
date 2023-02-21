import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) =>{
    
    //let valor = 'Nome'

    //const [valor, setValor] = useState('');

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value);
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required="{props.true}" type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;