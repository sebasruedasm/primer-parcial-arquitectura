import { checkSchema } from "express-validator";

export const getLibroValidator = checkSchema(
  {
    id_libro: {
      isInt: {
        options: { min: 1 },
        errorMessage: "El indicador debe ser un numero entero positivo",
      },
    },
  },
  ["params"]
);
