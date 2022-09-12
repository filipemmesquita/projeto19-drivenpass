import Joi from 'joi';

export const newCardSchema = Joi.object({
  title: Joi.string().max(50).required(),
  number:Joi.string().min(16).max(16).required(),
  holderName: Joi.string().required(),
  cvc:Joi.string().min(3).max(3).required(),
  expiryDate:Joi.string().min(5).max(5).required(),
  password:Joi.string().min(4).max(4).required(),
  isVirtual:Joi.boolean(),
  type:Joi.string().valid('credit','debit','both').required(),
});
