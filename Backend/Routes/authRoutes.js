// import express from 'express';
// import { registerUser,signupuser } from '../controllers/userController.js';

// const router = express.Router();

// router.post('/register', registerUser);
// router.post('/signup', signupuser);

// export default router;
import express from "express";
import { registerUser, signupuser } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/signup", signupuser);

export default router;

