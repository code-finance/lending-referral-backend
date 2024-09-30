const jwt = require('jsonwebtoken');
const Web3Token = require('talken-web3-token');
const moment = require('moment');
const {ErrorMessage} = require('../utils/errorMessage');

module.exports = {
  validateToken: async (req, res, next) => {
    let token =
      (req.headers.authorization && req.headers.authorization.split(' ')[1]) ||
      req.headers.accesstoken;
    let result;
    if (token) {
      try {
        if (jwt.decode(token)) {
          // jsonwebtoken
          result = jwt.verify(token, process.env.JWT_SECRET);
          req.decoded = result;
        } else {
          // Web3Token
          const {address, body} = await Web3Token.verify(token);
          if (moment().isAfter(body['issued-at']) && moment().isBefore(body['expiration-time'])) {
            req.body.walletAddress = address;
          } else {
            throw new Error(ErrorMessage.TOKEN_EXPIRED);
          }
        }
        next();
      } catch (error) {
        console.log(error);
        result = {
          status: 0,
          data: null,
          code: 11,
          message: (error && error?.message) || 'Invalid signature',
        };
        res.status(401).send(result);
      }
    } else {
      result = {
        status: 0,
        data: null,
        code: 12,
        message: 'Authentication error. Token required.',
      };
      res.status(401).send(result);
    }
  },
  generateAccessToken: (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRE_ACCESSTOKEN,
    });
  },
  generateRefreshToken: (user) => {
    return jwt.sign(user, process.env.JWT_REFRESH_TOKEN, {expiresIn: '10d'});
  },
  verifyRefreshToken: (refreshToken) => {
    return jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN);
  },
  getUidFromToken: (req, res) => {
    let token =
      (req.headers.authorization && req.headers.authorization.split(' ')[1]) ||
      req.headers.accesstoken;
    let uid = null;
    if (token && jwt.decode(token)) {
      const session = jwt.verify(token, process.env.JWT_SECRET);
      uid = session.uid;
    }
    return uid;
  },
};
