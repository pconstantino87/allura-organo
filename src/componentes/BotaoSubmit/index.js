import './BotaoSubmit.css';
export const BotaoSubmit = (props) => {
    return <button type="submit" className="botao">{props.children}</button>
}
export default BotaoSubmit