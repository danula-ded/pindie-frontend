"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main className="main-inner">
      {newGames ? (
        <CardsListSection id="new" title="Новинки" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
