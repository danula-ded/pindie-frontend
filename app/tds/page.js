import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { CardsList } from "../components/CardsList/CardsList.jsx";
import { endpoints } from "../api/config.js";

export default async function TDS(){
    const tdsGames = await getNormalizedGamesDataByCategory(endpoints.games,"TDS");
    return (
        <main className="main-inner">
            <CardsList id="TDS" title="TDS" data={tdsGames}/>
        </main>
    )
}