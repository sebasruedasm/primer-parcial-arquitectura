import pgConnection from "../service/pgConnection.service.js";

export const getLibroModel = async () => {
  const pg = new pgConnection();
  return await pg.connection.query("SELECT * FROM LIBRO");
};

export const getLibroUniModel = async (id_libro) => {
  try {
    const pg = new pgConnection();
    return await pg.connection.query(
      "SELECT * FROM LIBRO WHERE ID_LIBRO = $1",
      [id_libro]
    );
  } catch (error) {
    return [];
  }
};

export const postLibroModel = async (
  titulo,
  autor,
  anyo,
  ciudad,
  editorial
) => {
  const pg = new pgConnection();
  return await pg.connection.query(
    "INSERT INTO LIBRO (TITULO, AUTOR, ANYO, CIUDAD, EDITORIAL) VALUES ($1,$2,$3,$4,$5) returning *",
    [titulo, autor, anyo, ciudad, editorial]
  );
};

export const putLibroModel = async (
  id_libro,
  titulo,
  autor,
  anyo,
  ciudad,
  editorial
) => {
  const pg = new pgConnection();
  return await pg.connection.query(
    "UPDATE LIBRO SET TITULO = ${tit}, AUTOR = ${aut}, ANYO = ${an}, CIUDAD = ${cit}, EDITORIAL = ${edit} WHERE ID_LIBRO = ${id} returning *",
    {
      tit: titulo,
      aut: autor,
      an: anyo,
      cit: ciudad,
      edit: editorial,
      id: id_libro,
    }
  );
};

export const deleteLibroModel = async (id_libro) => {
  const pg = new pgConnection();
  return await pg.connection.query(
    "DELETE FROM LIBRO WHERE ID_LIBRO = $1 returning *",
    [id_libro]
  );
};

export default {
  getLibroModel,
  getLibroUniModel,
  postLibroModel,
  putLibroModel,
  deleteLibroModel,
};
