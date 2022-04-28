import React from 'react';
import Cabecalho from '../Components/Cabecalho';
import Titulo from '../Components/Titulo';
import Botao from '../Components/Botao';
import style from './App.module.scss';
import SobreMim from '../Components/SobreMim';

function App() {
  return (
    <div className={style.background}>
      <Cabecalho />
      <Titulo/>
      <Botao>
        Entre em contato
      </Botao>
      <SobreMim/>
    </div>
  );
}

export default App;
