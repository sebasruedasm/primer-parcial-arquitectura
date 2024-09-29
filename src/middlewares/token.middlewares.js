import jwt from "jsonwebtoken";
import { environment } from "../config/default.js";

export const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];

  //Verifica que el token no exista
  if (!token) {
    //Si el token no existe genera una respuesta
    return res.status(401).json({
      success: false,
      msg: "Auhorization required 1",
    });
  }

  token = token.split(" ");

  //Verificó que la Auth sea Bearer
  if (token[0] !== "Bearer") {
    //Retorno una respuesta de autorización requerida
    return res.status(401).json({
      success: false,
      msg: "Authorization required 2",
    });
  }

  //Verificar que el token sea correcto
  jwt.verify(token[1], environment.jwt_hash, (error, decode) => {
    //si el token tiene un error
    if (error) {
      //devolvemos la respuesta del error
      return res.status(201).json({
        success: false,
        msg: "Authorization required 3",
      });
    }
    //Continuar al siguiente middleware
    next();
  });
};
