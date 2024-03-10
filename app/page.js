import { getNormalizedGamesDataByCategory } from "./api/api-utils";

import { Banner } from "./components/Banner/Banner";
import { CardsList } from "./components/CardsList/CardsList";
import { Promo } from "./components/Promo/Promo";

import { endpoints } from "./api/config.js";

export default async function Home() {
  const popularGames = await getNormalizedGamesDataByCategory(endpoints.games,"popular");
  const newGames = await getNormalizedGamesDataByCategory(endpoints.games,"new");
  return (
    <main className="main">
      <Banner />

      <CardsList id="popular" title="Популярные" data={popularGames} />
      <CardsList id="new" title="Новинки" data={newGames} />

      <Promo />
    </main>
  );
}
