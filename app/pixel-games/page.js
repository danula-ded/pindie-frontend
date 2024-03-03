import { getGamesByCategory } from "../data/data-utils"
import { CardsList } from "../components/CardsList/CardsList.jsx";


export default function Pixel(){
    const pixelGames = getGamesByCategory("pixel")
    return (
        <main className="main-inner">
            <CardsList id="pixel" title="Пиксельные" data={pixelGames}/>
        </main>
    )
}