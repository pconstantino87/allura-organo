import './ListaSuspensa.css';
import CampoSelect from '../CampoSelect'

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <CampoSelect itens={props.itens} aoAlterado={props.aoAlterado} valor={props.valor}/>
        </div>
    );
}
export default ListaSuspensa;

