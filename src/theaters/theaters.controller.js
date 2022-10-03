const asyncErrorBoundary = require("../utils/errors/asyncErrorBoundary");
const service = require("./theaters.service");

async function list(req, res) {
  try {
    const theaters = await service.list();

    const theatersAndMovies = theaters.map(async (theater) => {
      const { theater_id } = theater;
      const movies = await service.getMovies(theater_id);
      return { ...theater, movies: movies };
    });

    res.status(200).json({ data: await Promise.all(theatersAndMovies) });
  } catch ({ message }) {
    next({ status: 500, message });
  }
}

module.exports = {
  list: [asyncErrorBoundary(list)],
};
