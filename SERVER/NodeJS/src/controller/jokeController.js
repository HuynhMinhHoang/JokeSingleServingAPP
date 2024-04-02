import jokeService from "../services/jokeService";
import voteService from "../services/voteService";

const getJokeController = async (req, res) => {
  try {
    if (req.cookies.voteJokesByCookie) {
      const votedJokes = JSON.parse(req.cookies.voteJokesByCookie);

      //gửi id joke từ cookie vào getRandomJokeService
      const joke = await jokeService.getRandomJokeService(
        votedJokes.map((vote) => parseInt(vote.jokeId))
      );
      if (joke) {
        return res.json(joke);
      } else {
        return res.json({
          errMessage: "That's all the jokes for today! Come back another day!",
        });
      }
    } else {
      const jokeContent = await jokeService.getRandomJokeEmptyCookieService();
      console.log("jokeContentjokeContent", jokeContent);

      return res.json(jokeContent);
    }
  } catch (error) {
    res.status(500).json({ errMessage: error.message });
  }
};

const voteJokeController = async (req, res) => {
  try {
    const jokeId = req.query.jokeId;
    const like = req.query.like;
    // console.log("client jokeId", jokeId);
    // console.log("client like", like);

    //kiểm tra input
    if (!jokeId || !like) {
      return res
        .status(400)
        .json({ errMessage: "Lỗi thiếu dữ liệu controller!" });
    }

    // if (
    //   !jokeId ||
    //   (!["true", "false"].includes(like) && typeof like !== "boolean")
    // ) {
    //   return res.status(400).json({ errMessage: "Lỗi dữ liệu không hợp lệ!" });
    // }

    const voteJokesByCookie = req.cookies.voteJokesByCookie
      ? JSON.parse(req.cookies.voteJokesByCookie)
      : [];

    //clear cookie
    // res.clearCookie("voteJokesByCookie");

    //kiểm tra người dùng đã bình chọn joke này trước đó chưa
    const existingVote = voteJokesByCookie.find(
      (vote) => vote.jokeId === jokeId
    );

    if (existingVote) {
      return res.status(400).json({
        errMessage: "Người dùng đã bình chọn cho câu đùa này trước đó.",
      });
    }

    //add vote
    let success = await voteService.voteJokeService(jokeId, like);

    //add jokeId & like vào cookies
    const likeBoolean = like === "true" ? true : false;

    voteJokesByCookie.push({ jokeId, like: likeBoolean });
    res.cookie("voteJokesByCookie", JSON.stringify(voteJokesByCookie), {
      maxAge: 10000, // 10s
      httpOnly: true,
    });

    return res.status(200).json(success);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getJokeController: getJokeController,
  voteJokeController: voteJokeController,
};
