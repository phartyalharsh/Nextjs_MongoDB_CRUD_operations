import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  salary: { type: Number, required: true },
  birthday: { type: Date, required: true },
  isActive: { type: Boolean, required: true },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
