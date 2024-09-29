import { Router } from "express";
import routerLibros from "./libros.route.js";
import routerAuth from "./auth.route.js";

const route = Router();

route.use("/auth", routerAuth);
route.use("/api", routerLibros);

export default route;
