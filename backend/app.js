import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDb from './db/db.js';
import Password from './models/password.models.js';
import { auth } from "express-oauth2-jwt-bearer";


const app = express();
app.use(cors({
  origin: "https://securepass-pmtmhuszi-saurabh0772s-projects.vercel.app",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER,
  tokenSigningAlg: 'RS256'
});

// enforce on all endpoints
// app.use(checkJwt);


app.post('/save-pass', checkJwt, async (req, res) => {
    
    try{
        const { site, username, password } = req.body;

        const newPassword = new Password({
            site,
            username,
            password,
            userId: req.auth.payload.sub
        }); 

        const savedPassword = await newPassword.save();

res.status(200).json(savedPassword);
    }
    catch(error){
        console.error("Error saving password:", error);
        res.status(500).json({ message: "Error saving password" });
    }

});

app.get("/passwords", checkJwt, async (req, res) => {
  try {
    const allPasswords = await Password.find({ userId: req.auth.payload.sub });
    res.json(allPasswords);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.delete("/delete-pass/:id", checkJwt, async (req, res) => {
  try {
    await Password.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting password" });
  }
});

app.get("/debug", checkJwt, (req, res) => {
  res.json({
    message: "Token valid",
    payload: req.auth.payload
  });
});

const PORT = process.env.PORT || 3000;

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});