import CampoTexto from '../CampoTexto';
import BotaoSubmit from '../BotaoSubmit';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { useState } from 'react';

const Formulario = (props) => {    

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
      evento.preventDefault();
      props.aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
      })
      setCargo('')
      setImagem('')
      setNome('')
      setTime('')

    }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio='{true}' label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
        <CampoTexto obrigatorio='{true}' label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
        <CampoTexto obrigatorio='{true}' label="Imagem" placeholder="Digite a URL da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
        <ListaSuspensa label='Time' itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} obrigatorio='{true}'/>
        <BotaoSubmit>Criar Card</BotaoSubmit>
      </form>
    </section>
  );
};

export default Formulario;
