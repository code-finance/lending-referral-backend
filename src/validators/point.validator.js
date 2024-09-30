const {body, param, check} = require('express-validator');
const {ErrorMessage} = require('../utils/errorMessage');

module.exports = {
  classname: 'ValidatePoint',
  getPoints: () => {
    return [param('wallet').trim().not().isEmpty().withMessage('Missing wallet parameter')];
  },
  addPoint: () => {
    return [
      param('wallet').trim().not().isEmpty().withMessage('Missing wallet parameter'),
      body('point').trim().not().isEmpty().withMessage('Missing point parameter'),
      body('actionId')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Missing action parameter')
        .isInt({min: 1, max: 4})
        .withMessage(ErrorMessage.INVALID_ACTION_ID),
    ];
  },
};
