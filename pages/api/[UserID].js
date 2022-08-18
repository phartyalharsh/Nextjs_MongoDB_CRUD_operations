import main from "../../services/dbconnection";
import User from "../../models/User";

main();
export default async function apiCalling(req, res) {
  //   res.send("api calling");
  const { method } = req;
  const { UserID } = req.query;

  switch (method) {
    case "PUT":
      try {
        // const users = await User.find({});
        const { firstName, lastName, email, salary, birthday, isActive } =
          req.body;
        await User.updateOne(
          { _id: UserID },
          { firstName, lastName, email, salary, birthday, isActive }
        );
        res.status(200).json({ sucess: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
      break;

    case "DELETE":
      try {
        // console.log("started deleting");
        await User.deleteOne({ _id: UserID });
        // const { firstName, lastName, email, salary, birthday, isActive } =
        //   req.body;
        // if((!name, !email))
        // const client = await Client.create({
        //   firstName,
        //   lastName,
        //   email,
        //   salary,
        //   birthday,
        //   isActive,
        // });
        res.status(200).json({ sucess: true });
      } catch (error) {
        // console.log(error);
        res.status(500).json({ sucess: false, error });
      }
      break;
  }
}
