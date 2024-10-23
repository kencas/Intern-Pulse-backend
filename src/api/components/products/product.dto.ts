import Joi = require("joi");

export interface ProductDto
{
    code?: string;
    name?: string;
    description?: string;
    amount?: number;
    discount?: number;
    vendor?: string;
    image?: string;
}

export function validateCreateProduct(product: ProductDto)
{
    const JoiSchema = Joi.object({
      
        code: Joi.string()
                  .min(5)
                  .max(10)
                  .required(),
        name: Joi.string()
                  .required(),
        description: Joi.string()
                  .required(),
        amount: Joi.number()
                  .required(),
        discount: Joi.number()
                     .allow('', null, 0)
                     .optional(),
        vendor: Joi.string()
                     .required(),
        image: Joi.string()
                     .required()          

        
    }).options({ abortEarly: false });
  
    return JoiSchema.validate(product)
}


export function validateUpdateProduct(product: ProductDto)
{
    const JoiSchema = Joi.object({
      
        code: Joi.string()
                  .min(5)
                  .max(10)
                  .required(),
        name: Joi.string()
                  .required(),
        description: Joi.string()
                  .required(),
        amount: Joi.number()
                  .required(),
        discount: Joi.number()
                     .allow('', null, 0)
                     .optional(),
        vendor: Joi.string()
                     .required(),
        image: Joi.string()
                     .required()          

        
    }).options({ abortEarly: false });
  
    return JoiSchema.validate(product)
}