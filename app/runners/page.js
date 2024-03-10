import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { CardsList } from "../components/CardsList/CardsList.jsx";
import { endpoints } from "../api/config.js";

export default async function Runner(){
    const runnerGames = await getNormalizedGamesDataByCategory(endpoints.games,"runner");
    return (
        <main className="main-inner">
            <CardsList id="runner" title="Ранеры" data={runnerGames}/>
        </main>
    )
}