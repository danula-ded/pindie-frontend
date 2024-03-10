import { CardsList } from "../components/CardsList/CardsList.jsx";
import { getGamesDataByCategory} from "../api/api-utils";
import { endpoints } from "../api/config.js";


export default async function New(){
    const newGames = await getGamesDataByCategory(endpoints.games, "new");
    return (
        <main className="main-inner">
            <CardsList id="new" title="Новинки" data={newGames}/>
        </main>
    )
}