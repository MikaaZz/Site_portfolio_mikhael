import React from "react";
import Descricao from "./Descricao";
import Foto from "./Foto";
import style from './SobreMim.module.scss'


class SobreMim extends React.Component {
    render(){
        return(
            <div className={style.background}>
                <h2>Sobre mim</h2>
                <div className={style.containerFotoDescricao}>
                    <Foto/>
                    <Descricao/>
                </div>
            </div>
        )
    }
}

export default SobreMim;