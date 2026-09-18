import { body } from "express-validator";

export const registerValidation = [
  body("firstname")
    .trim()
    .notEmpty()
    .withMessage("Firstname is required"),

  body("lastname")
    .trim()
    .notEmpty()
    .withMessage("Lastname is required"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Valid email is required")
    .normalizeEmail(),

  body("phone")
    .optional()
    .trim()
    .isLength({ min: 7, max: 15 })
    .withMessage("Phone number must be between 7 and 15 characters"),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
];
