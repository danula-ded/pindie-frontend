import { getGamesDataByCategory } from "../api/api-utils"
import { CardsList } from "../components/CardsList/CardsList.jsx";
import { endpoints } from "../api/config.js";

export default async function Popular(){
    const popularGames = await getGamesDataByCategory(endpoints.games,"popular");
    return (
        <main className="main-inner">
            <CardsList id="popular" title="Популярные" data={popularGames}/>
        </main>
    )
}