import { Router } from "express";
import libroController from "../controllers/libro.controller.js";
import { validate } from "../middlewares/validators.middlewares.js";
import { getLibroValidator } from "../validators/auth.validators.js";

const routerLibros = Router();

routerLibros.get("/libros", libroController.getAllLibro);
routerLibros.get("/libros/:id_libro", validate(getLibroValidator), libroController.getLibroUni);

routerLibros.post("/libros", libroController.postLibro);

routerLibros.put("/libros/:id_libro", validate(getLibroValidator), libroController.putLibro);

routerLibros.delete("/libros/:id_libro", validate(getLibroValidator), libroController.deleteLibro);

export default routerLibros;