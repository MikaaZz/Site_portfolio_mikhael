export default function Itens({infoAzul , infoBranca}: {infoAzul: string, infoBranca: string}) {
    return(
        <li>
            <p>{infoAzul}{infoBranca}</p>
        </li>
    )
}