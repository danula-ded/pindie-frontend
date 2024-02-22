import { data } from "./data.js";

export const getGamesByCategory = (category) => {
    return data.filter((game) => {
      return game.category.find((item) => {
        return item.name === category;
      });
    });
  }

