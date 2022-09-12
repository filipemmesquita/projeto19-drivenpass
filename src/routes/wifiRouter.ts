import { Router } from "express";
import { createWifi, deleteSingleWifi, displayAllWifis, displaySingleWifi } from "../controllers/wifiController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import { newWifiSchema } from "../schemas/wifiSchemas";

const wifiRouter=Router()
wifiRouter.post('/wifis/new',validateToken,validateSchemaMiddleware(newWifiSchema),createWifi);
wifiRouter.get('/wifis/all',validateToken,displayAllWifis);
wifiRouter.get('/wifis/:wifiId',validateToken,displaySingleWifi);
wifiRouter.delete('/wifis/:wifiId',validateToken,deleteSingleWifi);

export default wifiRouter;