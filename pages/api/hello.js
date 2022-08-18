// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import main from "../../services/dbconnection";

export default function handler(req, res) {
  // main();
  res.status(200).json({ name: "John Doe" });
}
