const {body, param, check} = require('express-validator');

module.exports = {
  classname: 'ValidateClaim',
  claim: () => {
    return [
      param('wallet').trim().not().isEmpty().withMessage('Missing wallet parameter'),
      body('chainId').trim().not().isEmpty().withMessage('Missing chainId parameter'),
    ];
  },
};
