import Image from "next/image";
import styles from "./page.module.css";

import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { PopularCardsList } from "./components/CardsList/PopularCardsList";
import { NewCardsList } from "./components/CardsList/NewCardsList";


export default function Home() {
  return (
    <main className="main">
      <Banner/>
      <PopularCardsList/>
      <NewCardsList/>
      <Promo/>  
    </main>
  );
}
