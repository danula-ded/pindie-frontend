"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
  const shooterGames = useGetDataByCategory(endpoints.games, "shooter");
  return (
    <main className="main-inner">
      {shooterGames ? (
        <CardsListSection id="shooter" title="Шутеры" data={shooterGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
