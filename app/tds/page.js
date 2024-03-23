"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
  const tdsGames = useGetDataByCategory(endpoints.games, "TDS");
  return (
    <main className="main-inner">
      {tdsGames ? (
        <CardsList id="TDS" title="TDS" data={tdsGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
