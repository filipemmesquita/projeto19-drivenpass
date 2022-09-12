import Joi from 'joi';

export const newCredentialSchema = Joi.object({
  userName: Joi.string().required(),
  title: Joi.string().max(50).required(),
  url:Joi.string().uri().required(),
  password: Joi.string().required(),
});

  
