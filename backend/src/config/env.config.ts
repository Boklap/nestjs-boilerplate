import Joi from 'joi';

export const envValidationSchema: Joi.ObjectSchema<any> = Joi.object({
    APP_PORT: Joi.number().required(),
    STAGE: Joi.string().required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_USER: Joi.string().required(),
    DB_PASS: Joi.string().required(),
    DB_NAME: Joi.string().required(),
    GLOBAL_PREFIX: Joi.string().required(),
});
