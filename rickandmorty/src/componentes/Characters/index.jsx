import "./style.css"

import CharCard from '../CharCard';

function Characters({personagens}){

    return (
        <>
            <h1>Personagens</h1>
            <ul className="Lista">
                {personagens.map((e)=><li key={e.id} className="card"><CharCard nome={e.name} imagem={e.image} status={e.status}/></li>)}
            </ul>
        </>
    )
}
export default Characters