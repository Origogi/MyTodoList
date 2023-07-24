import express from "express";
import "express-async-errors";

import { body } from "express-validator";
import { validate } from "../middleware/validator.js";
import * as authController from '../controller/auth.js';
import {isAuth} from '../middleware/auth.js';

const router = express.Router();

const validateCredential = [
  body("username")
    .trim()
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("username should be at least 5 characters"),
  body("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("password should be at least 5 characters"),
  validate,
];

router.post("/login", validateCredential, authController.login);
router.get("/me", isAuth, authController.me);

export default router;
