import Joi from 'joi';

export const newNoteSchema = Joi.object({
  title: Joi.string().max(50).required(),
  note:Joi.string().required(),
});
