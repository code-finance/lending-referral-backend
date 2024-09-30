const {body, param, check} = require('express-validator');

module.exports = {
  classname: 'ValidateReferral',
  referral: () => {
    return [param('wallet').trim().not().isEmpty().withMessage('Missing wallet parameter')];
  },
  register: () => {
    return [param('wallet').trim().not().isEmpty().withMessage('Missing wallet parameter')];
  },
  setReferral: () => {
    return [
      param('wallet').trim().not().isEmpty().withMessage('Missing wallet parameter'),
      body('myReferral').trim().not().isEmpty().withMessage('Missing myReferral parameter'),
    ];
  },
  getTop: () => {
    return [param('num').trim().not().isEmpty().withMessage('Missing num parameter')];
  },
};
