import db from "../models/index";

const voteJokeService = async (jokeId, like) => {
  return new Promise(async (resolve, reject) => {
    try {
      // console.log("jokeId", jokeId);
      // console.log("like", like);

      if (!jokeId || !like) {
        reject({
          errCode: 2,
          errMessage: "Lỗi thiếu dữ liệu!",
        });
      }

      const joke = await db.Joke.findByPk(jokeId);
      if (!joke) {
        throw new Error("Joke không tồn tại!");
      }

      console.log("===like serive", like);

      if (like === "true") {
        joke.likes += 1;
        console.log("đã like");
      } else if (like === "false") {
        joke.dislikes += 1;
        console.log("đã dislikes");
      }

      await joke.save();
      resolve({
        errCode: 0,
        errMessage: "Vote thành công!",
      });
      s;
    } catch (e) {
      reject({
        errCode: 1,
        errMessage: e.message,
      });
    }
  });
};

module.exports = {
  voteJokeService: voteJokeService,
};
