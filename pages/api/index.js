import main from "../../services/dbconnection";
import User from "../../models/User";

main();
export default async function apiCalling(req, res) {
  //   res.send("api calling");
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({ sucess: true, data: users });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
      break;

    case "POST":
      try {
        const { firstName, lastName, email, salary, birthday, isActive } =
          req.body;
        // if((!name, !email))
        const client = await User.create({
          firstName,
          lastName,
          email,
          salary,
          birthday,
          isActive,
        });
        res.status(200).json({ sucess: true, data: User });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
      break;
  }
}
