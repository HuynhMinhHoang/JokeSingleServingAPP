import db from "../models/index";

const getRandomJokeService = async (jokeIdByCookie) => {
  try {
    console.log("id joke đã vote: ", jokeIdByCookie);

    const jokes = await db.Joke.findAll({
      attributes: ["id"],
      raw: true,
    });

    const jokeIds = jokes.map((joke) => joke.id);

    //filter id joke chưa vote
    const availableJokeIds = jokeIds.filter(
      (id) => !jokeIdByCookie.includes(id)
    );

    console.log("id joke chưa được vote: ", availableJokeIds);

    if (availableJokeIds.length === 0 && jokeIds.length !== 0) {
      console.log("Không còn joke nào để hiển thị!");
      return null;
    }

    //random id joke từ availableJokeIds (các id chưa được vote)
    const randomIndex = Math.floor(Math.random() * availableJokeIds.length);
    const randomJokeId = availableJokeIds[randomIndex];

    const joke = await db.Joke.findOne({
      where: { id: randomJokeId },
      raw: true,
    });

    return joke;
  } catch (error) {
    throw error;
  }
};

const getRandomJokeEmptyCookieService = async () => {
  try {
    const jokes = await db.Joke.findAll({
      attributes: ["id"],
      raw: true,
    });

    const jokeIds = jokes.map((joke) => joke.id);

    const randomIndex = Math.floor(Math.random() * jokeIds.length);
    const randomJokeId = jokeIds[randomIndex];

    const randomJoke = await db.Joke.findOne({
      where: { id: randomJokeId },
      raw: true,
    });

    console.log("Chưa có cookie hoặc cookie rỗng");

    return randomJoke;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getRandomJokeService: getRandomJokeService,
  getRandomJokeEmptyCookieService: getRandomJokeEmptyCookieService,
};
