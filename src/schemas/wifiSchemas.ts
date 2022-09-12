import Joi from 'joi';

export const newWifiSchema = Joi.object({
  wifiName: Joi.string().required(),
  title: Joi.string().max(50).required(),
  password: Joi.string().required(),
});

  
