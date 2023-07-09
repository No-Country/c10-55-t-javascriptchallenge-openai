import { Pool } from "../db/conex.js";
import bcrypt from "bcrypt";

export const getDataUserForm = async (req, res) => {
  //guardando la data del usuario en variables
  const username = req.body.username;
  const password = req.body.password;
  const userEmail = req.body.email;
  const userPhone = req.body.phone;

  try {
    // Save data in database
    const hashPassword = await bcrypt.hash(password, 10);

    const [rows] = await Pool.query(
      "INSERT INTO user (useremail, username, password, image_url) VALUES (?,?,?,?)",
      [userEmail, username, hashPassword, userPhone]
    );

    // validate response
    rows
      ? res.json({ "message": "saved data!" })
      : res.json({ "message": res.status(500) });
  } catch (error) {
    console.log(error);
  }
};

export const showDataUser = async (req, res) => {
  try {
    // show all data
    const [query] = await Pool.query("SELECT * FROM user");

    // validate responde
    query
      ? res.json({ "message": query })
      : res.json({ "message": res.status(500) });
  } catch (error) {
    res.json({ "message": error });
  }
};

export const searchUser = async (req, res) => {
  // buscar usuario por id
  const { id } = req.query.id;
  try {
  } catch (e) {
    console.log(e);
  }
};