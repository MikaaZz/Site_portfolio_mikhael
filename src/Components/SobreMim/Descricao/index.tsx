import React from "react";
import Itens from "./Itens";
import style from './Descricao.module.scss'

export default function Descricao() {
    const infos = [{
        infoAzul: 'Formação:',
        infoBranca: ' Cursando Bacharel em Design'
    },
    {
        infoAzul: 'Cursos Extras:',
        infoBranca: ' Cursos Front-End Alura'
    },
    {
        infoAzul: 'E-mail:',
        infoBranca: ' mikhael928@gmail.com'
    },
    {
        infoAzul: 'WhatsApp:',
        infoBranca: ' (47) 9 9632-6388'
    }];
    return (

        <ul className={style.lista}>
            <li className={style.itemLista}>Meu nome: Mikhael Zimmermann</li>
            <li className={style.itemLista}>Estou iniciando minha carreira na área do desenvolvimento Front-End, em busca de uma oportunidade de mostrar meu valor, meu empenho e dedicação em novas oportunidades.</li>
            <li className={style.itemLista}>No momento trabalho em uma empresa de Educação Corporativa e lá comecei minha jornada no mundo Dev.</li>
            {infos.map((item, index) => (
                <Itens
                    key={index}
                    {...item}
                />
            ))}
        </ul>

    )

}