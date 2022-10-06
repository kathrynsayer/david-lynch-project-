import query from "../db/utils";

const findAll = async () => {
  return await query("SELECT FilmId, Title, Description, ReleaseYear, RunningTime, PosterImageURL FROM Films");
};

const findOne = async (FilmId) => {
  return query("SELECT  FilmId, Title, Description, ReleaseYear, RunningTime, PosterImageURL FROM Films WHERE FilmId = ?", [FilmId,]);
};

const addOne = async (film) => {
  return await query("INSERT INTO Films SET ?", [film]);
};

const updateOne = async (film, FilmId) => {
  return await query("UPDATE Films SET ? WHERE FilmId = ?", [
    film,
    FilmId,
  ]);
};

const removeOne = async (FilmId) => {
  return await query("DELETE FROM employees WHERE FilmId = ?", [id]);
};

export default {
  findAll,
  findOne,
  addOne,
  updateOne,
  removeOne
}