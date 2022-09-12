import { Router } from "express";
import { createCard } from "../controllers/cardController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import { newCardSchema } from "../schemas/cardSchemas";

const cardRouter=Router();

cardRouter.post('/cards/new',validateToken,validateSchemaMiddleware(newCardSchema),createCard)

export default cardRouter