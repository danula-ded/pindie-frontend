import { getGamesDataByCategory } from "../api/api-utils"
import { CardsList } from "../components/CardsList/CardsList.jsx";
import { endpoints } from "../api/config.js";

export default async function Pixel(){
    const pixelGames = await getGamesDataByCategory(endpoints.games,"pixel");
    return (
        <main className="main-inner">
            <CardsList id="pixel" title="Пиксельные" data={pixelGames}/>
        </main>
    )
}