const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})

module.exports = {
  user: {
    create: {
      query: validator.query(Joi.object({
        name: Joi.string().required()
      })),
      body: validator.body(Joi.object({
        f_name: Joi.string().required(),
        l_name: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().required()
      })),
      params: validator.params(Joi.object({
        id: Joi.number().integer().required()
      }))
    },
    update: {
      query: validator.query(Joi.object({
        name: Joi.string().required()
      })),
      body: validator.body(Joi.object({
        f_name: Joi.string().required(),
        l_name: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().required()
      })),
      params: validator.params(Joi.object({
        id: Joi.number().integer().required()
      }))
    },
    get: {
      query: validator.query(Joi.object({
        id: Joi.number().integer().required()
      })),
      params: validator.params(Joi.object({
        id: Joi.number().integer().required()
      }))
    },
    delete: {
      query: validator.query(Joi.object({
        name: Joi.string().required()
      })),
      body: validator.body(Joi.object({
        f_name: Joi.string().required(),
        l_name: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().required()
      })),
      params: validator.params(Joi.object({
        id: Joi.number().integer().required()
      }))
    }
  }
}