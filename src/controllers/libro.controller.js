import libroModel, { getLibroUniModel, postLibroModel, } from "../models/libro.model.js";

/** La función llama a todos los libros que estan en la base de datos */
export async function getAllLibro(req, res) {
  let datos = await libroModel.getLibroModel();

  if (!datos || datos.length === 0) {
    return res.status(404).json({
      success: false,
      msg: "No hay libros registrados",
    });
  }

  return res.status(200).json({
    success: true,
    msg: "Listado de todos los libros",
    data: datos,
  });
};

/** La función llama a un solo libro por medio del id */
export async function getLibroUni(req, res) {
  let { id_libro } = req.params;

  let data = await getLibroUniModel(id_libro);

  if (!data || data.length === 0) {
    return res.status(400).json({
      success: false,
      msg: "¡Libro No Encontrado!",
      data: data,
    });
  }

  return res.status(200).json({
    success: true,
    msg: "¡Libro Encontrado!",
    data: data,
  });
};

/** Esta función permite agregar un nuevo libro por medio de un JSON */
export const postLibro = async (req, res) => {
  let { titulo, autor, anyo, ciudad, editorial } = req.body;

  let datos = await postLibroModel(titulo, autor, anyo, ciudad, editorial);

  res.status(200).json({
    success: true,
    msn: "¡Libro agregado!",
    msg: datos,
  });
};

/* Esta función permie actualizar un libro mediante un JSON */
export const putLibro = async (req, res) => {
  let { id_libro } = req.params;

  let { titulo, autor, anyo, ciudad, editorial } = req.body;

  let data = await libroModel.putLibroModel(
    id_libro,
    titulo,
    autor,
    anyo,
    ciudad,
    editorial
  );

  if (!data || data.length === 0) {
    return res.status(400).json({
      success: false,
      msg: "¡Libro No Encontrado!",
      data: data,
    });
  }

  return res.status(200).json({
    success: true,
    msg: "¡Libro Actualizado!",
    data: data,
  });
};

/** Esta función permite eliminar un libro */
export const deleteLibro = async (req, res) => {
  let { id_libro } = req.params;

  let data = await libroModel.deleteLibroModel(id_libro);

  if (!data || data.length === 0) {
    return res.status(400).json({
      success: false,
      msg: "¡El Libro No Existe!",
      data: data,
    });
  }

  return res.status(200).json({
    success: true,
    msg: "¡Libro Eliminado!",
    data: data,
  });

};

export default {
  getAllLibro,
  getLibroUni,
  postLibro,
  putLibro,
  deleteLibro,
};
