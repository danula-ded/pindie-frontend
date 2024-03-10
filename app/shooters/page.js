import { getGamesDataByCategory } from "../api/api-utils"
import { CardsList } from "../components/CardsList/CardsList.jsx";
import { endpoints } from "../api/config.js";


export default async function Shooter(){
    const shooterGames = await getGamesDataByCategory(endpoints.games,"shooter");
    return (
        <main className="main-inner">
            <CardsList id="shooter" title="Шутеры" data={shooterGames}/>
        </main>
    )
}