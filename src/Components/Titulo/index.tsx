import React from "react";
import style from './Titulo.module.scss';


class Titulo extends React.Component {
    render() {
        return (
            <div className={style.containerTitulo}>
                <h1>I' am</h1>
                <h2>Front-End</h2>
                <h2>Developer<strong>.</strong></h2>
            </div>
        )
    }
}

export default Titulo;