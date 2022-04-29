import React from "react";
import Mikhael_Neon_Aztar2 from '../../../Assets/img/Mikhael_Neon_Aztar2.png';
import style from './Foto.module.scss'

class Foto extends React.Component {
    render(){
        return(
            <div>
                <img src={Mikhael_Neon_Aztar2} alt="Imagem Mikhael" className={style.imagem} />
                <div className={style.bordaImagem}/>
            </div>
        )
    }
}

export default Foto;