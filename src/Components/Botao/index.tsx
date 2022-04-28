import React from "react";
import style from './Botao.module.scss';

class Botao extends React.Component<any, any> {
    render() {
        return (
            <a href="https://api.whatsapp.com/send?phone=5547996326388&text=Olá!%20Como%20posso%20ajudar?" target="_blank">
                <button className={style.botao}>
                    {this.props.children}
                </button>
            </a>
        )
    }
}

export default Botao;