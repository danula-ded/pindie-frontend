"use client";
import Styles from "./Game.module.css";
import { useRouter } from "next/navigation";
import { GameNotFound } from "@/app/GameNotFound/GameNotFound";
import { useEffect, useState } from "react";
import { getGameDataById, getMe, isResponseOk} from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { getJWT } from "@/app/components/Header/Header";


export default function GamePage(props) {
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [game, setGame] = useState(null);
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    async function fetchData(){
      const game = await getGameDataById(endpoints.games, props.params.id)
      isResponseOk(game) ? setGame(game) : setGame(null);
      setPreloaderVisible(false);
    }
    fetchData()
  }, [])

  useEffect(() => {
    const jwt = getJWT();
    if (jwt) {
      getMe(endpoints.me, jwt).then((userData) => {
        if (isResponseOk(userData)) {
          setIsAuthorized(true);
          setCurrentUser(userData);
        } else {
          setIsAuthorized(false);
          removeJWT();
        }
      });
    }
  }, []);

  return game ? (
    <>
      <section className={Styles["game"]}>
        <iframe className={Styles["game__iframe"]} src={game.link}></iframe>
      </section>
      <section className={Styles["about"]}>
        <h2 className={Styles["about__title"]}>{game.title}</h2>
        <div className={Styles["about__content"]}>
          <p className={Styles["about__description"]}>{game.description}</p>
          <div className={Styles["about__author"]}>
            <p>
              Автор:{" "}
              <span className={Styles["about__accent"]}>{game.developer}</span>
            </p>
          </div>
        </div>
        <div className={Styles["about__vote"]}>
          <p className={Styles["about__vote-amount"]}>
            За игру уже проголосовали:{" "}
            <span className={Styles["about__accent"]}>{game.users}</span>
          </p>
          <button
            disabled={!isAuthorized}
            className={`button ${Styles["about__vote-button"]}`}
          >
            Голосовать
          </button>
        </div>
      </section>
    </>
  ) :  preloaderVisible ? (
    <Preloader />
) : (
    <GameNotFound />
)}
