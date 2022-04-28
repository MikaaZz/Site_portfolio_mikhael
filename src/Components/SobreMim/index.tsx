import React from "react";
import Descricao from "./Descricao";
import Foto from "./Foto";


class SobreMim extends React.Component {
    render(){
        return(
            <>
                <h2>Sobre mim</h2>
                <div>
                    <Foto/>
                    <Descricao/>
                </div>
            </>
        )
    }
}

export default SobreMim;