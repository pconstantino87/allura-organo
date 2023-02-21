export const CampoSelect = (props) => {

  const aoAlterar = (e) => {
    props.aoAlterado(e.target.value)
    console.log(e.target.value)
  } 

  return (
    <select name="time" id="" onChange={aoAlterar} value={props.valor}>
      <option value="">Selecione...</option>
      {props.itens.map((item) => (
        <option key={item.nome}>{item.nome}</option>
      ))}
    </select>
  );
};
export default CampoSelect;
