import React from "react";
import style from './Cabecalho.module.scss';

class Cabecalho extends React.Component {
    render(){
        return (
            <ul className={style.lista}>
                <li className={style.sobreMim}>SOBRE MIM</li>
                <li className={style.skilss}>SKILSS</li>
                <li className={style.portfolio}>PORTFÓLIO</li>
                <li className={style.contato}>CONTATO</li>
            </ul>
        )   
    }
}

export default Cabecalho; 