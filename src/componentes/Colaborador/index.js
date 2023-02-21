import "./Colaborador.css"

const colaborador = ({nome, imagem, cargo, corFundo}) => {
    debugger
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor:corFundo}}>
                <img src={imagem} alt="" />
            </div>
            <div className="rodape" >
                <h4>{nome}</h4>    
                <h5>{cargo}</h5>    
            </div>
        </div>
    )
}

export default colaborador