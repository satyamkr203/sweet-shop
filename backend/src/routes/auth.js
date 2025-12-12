import express from 'express';

import { register, login } from '../controllers/authController.js';
import { registerSchema, loginSchema } from '../validators/authValidator.js';

const router = express.Router();

function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ errors: result.error.errors });
    }
    req.body = result.data;
    next();
  };
}

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);

export default router;
