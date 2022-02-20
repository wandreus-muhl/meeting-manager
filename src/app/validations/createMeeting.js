const joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const model = joi.object({
      title: joi.string().required(),
      description: joi.string(),
      datetime: joi.date().required()
    })
    const result = await model.validate(req.body, {
      abortEarly: false
    })
    if (result.error) {
      error = result.error
      console.log('#############', error)
      throw error
    }
    return next()
  } catch (error) {
    return res.status(400).json(error);
  }
}