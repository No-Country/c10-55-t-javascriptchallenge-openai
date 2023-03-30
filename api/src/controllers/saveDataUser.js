export const getDataUserForm = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userEmail = req.body.email;
  const userPhone = req.body.phone;

  res.json({
    username,
    password,
    userEmail,
    userPhone
  });
  console.log(username)
};
