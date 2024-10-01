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
      body('market').trim().not().isEmpty().withMessage('Missing market parameter'),
      body('asset').trim().not().isEmpty().withMessage('Missing asset parameter'),
      body('debt').trim().not().isEmpty().withMessage('Missing debt parameter'),
      body('apy').trim().not().isEmpty().withMessage('Missing apy parameter'),
      body('state').trim().not().isEmpty().withMessage('Missing state parameter'),
      body('point').trim().not().isEmpty().withMessage('Missing point parameter'),
      body('actionId')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Missing actionId parameter')
        .isInt({min: 1, max: 2})
        .withMessage(ErrorMessage.INVALID_ACTION_ID),
    ];
  },
};
