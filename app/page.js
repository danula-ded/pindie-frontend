import { getNormalizedGamesDataByCategory } from "./api/api-utils";

import { Banner } from "./components/Banner/Banner";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";
import { Promo } from "./components/Promo/Promo";

import { endpoints } from "./api/config.js";

export default async function Home() {
  const popularGames = await getNormalizedGamesDataByCategory(endpoints.games,"popular");
  const newGames = await getNormalizedGamesDataByCategory(endpoints.games,"new");
  return (
    <main className="main">
      <Banner />

      <CardsListSection id="popular" title="Популярные" data={popularGames} type="slider" />
      <CardsListSection id="new" title="Новинки" data={newGames} />

      <Promo />
    </main>
  );
}
