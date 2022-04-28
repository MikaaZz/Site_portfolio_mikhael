import React from 'react';
import Cabecalho from '../Components/Cabecalho';
import Titulo from '../Components/Titulo';
import Botao from '../Components/Botao';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.background}>
      <Cabecalho />
      <Titulo/>
      <Botao>
        Entre em contato
      </Botao>
    </div>
  );
}

export default App;
