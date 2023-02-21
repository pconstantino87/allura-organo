import Banner from './componentes/Banner';
import { useState } from 'react';

import Formulario from './componentes/Formulario';
import Time from './componentes/Time'
import colaborador from './componentes/Colaborador';
import Rodape from './componentes/Rodape'

function App() {
  
  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Data Science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Devops',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'UX e Design',
      corPrimaria:'#D86EBF',
      corSecundaria:'#FAE5F5'
    },
    {
      nome:'Mobile',
      corPrimaria:'#FEBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  } 

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)} times={times}/>
      
      {times.map(time => { return (  
          <Time 
            key={time.nome}
            nome={time.nome} 
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}>
            </Time> ) })}
      <Rodape></Rodape>
    </div>
  );
}

export default App;
