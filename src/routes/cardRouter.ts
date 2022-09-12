import { Router } from "express";
import { createCard, displayAllCards, displaySingleCard } from "../controllers/cardController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import { newCardSchema } from "../schemas/cardSchemas";

const cardRouter=Router();

cardRouter.post('/cards/new',validateToken,validateSchemaMiddleware(newCardSchema),createCard)
cardRouter.get('/cards/all',validateToken,displayAllCards);
cardRouter.get('/cards/:cardId',validateToken,displaySingleCard);


export default cardRouter