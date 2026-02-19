import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema ({
    site: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    userId: {
    type: String,
    ref: "User"
  }
}, {timestamps: true});

const Password = mongoose.model("Password", passwordSchema);

export default Password;