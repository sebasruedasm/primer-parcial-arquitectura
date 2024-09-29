import Jwt from "jsonwebtoken";
import { environment } from "../config/default.js";

export const login = async (req, res) => {
  const token = Jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 100 * 100,
      data: {
        role: "role_admin",
        doc: "1003237339",
        username: "usuario",
      },
    },
    environment.jwt_hash
  );

  res.status(200).json({
    success: true,
    token: token,
  });
};