const Joi = require('@hapi/joi');

module.exports.createUserSchema = Joi.object({
    name: Joi.string().alphanum().pattern(/^[a-zA-Z]+$/).min(3).max(20).requiered(),
    job: Joi.string().alphanum().min(5).max(50).requiered(),
    birthday: Joi.date().iso().min('1-1-2000').required(),
    username: Joi.string().alphanum().min(3).max(20).required(),
    mail: Joi.mail().min(5).max(30).when('username', { is: Joi.exist(), then: Joi.required() }),
    password: Joi.password().pattern(/^[a-zA-Z0-9]{3,30}$/),
    repeat_password: Joi.when('password', { is: Joi.exist(), then: Joi.password().pattern(/^[a-zA-Z0-9]{3,30}$/) }),
});
