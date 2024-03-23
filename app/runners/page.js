"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
  const runnerGames = useGetDataByCategory(endpoints.games, "runner");
  return (
    <main className="main-inner">
      {runnerGames ? (
        <CardsListSection id="runner" title="Ранеры" data={runnerGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
