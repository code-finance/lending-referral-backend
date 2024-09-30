const express = require('express');
const referralRouter = new express.Router();
const referralCtrl = require('../controller/referral.ctrl');
const referralValidator = require('../validators/referral.validator');
const isAuth = require('../utils/validate_token');

/**
 * @swagger
 * tags:
 *   name: Referral
 *   description: referral api
 *
 * components:
 *  securitySchemes:
 *    bearerAuth:            # arbitrary name for the security scheme
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT    # optional, arbitrary value for documentation purposes
 *
 * security:
 *   - bearerAuth: []
 */

/**
 * @swagger
 * /api/referral/{wallet}:
 *   get:
 *     tags:
 *       - Referral
 *     description: referral 조회
 *     produces:
 *     - "application/json"
 *     parameters:
 *       - in: path
 *         name: wallet
 *         required: true
 *         description: wallet address
 *         schema:
 *           type: string
 *           example: '0xdc926E34E73292cD7c48c6fD7375af7D93435D36'
 *     responses:
 *       "200":
 *         description: "successful operation"
 */
referralRouter.get('/:wallet', referralValidator.referral(), referralCtrl.getReferral);

/**
 * @swagger
 * /api/referral/{wallet}/register:
 *   post:
 *     tags:
 *       - Referral
 *     security:
 *       - bearerAuth: []
 *     description: User 등록
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - in: path
 *         name: wallet
 *         required: true
 *         description: wallet address
 *         schema:
 *           type: string
 *           example: '0xdc926E34E73292cD7c48c6fD7375af7D93435D36'
 *     requestBody:
 *       description: referral registration data
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Register'
 *     responses:
 *       "200":
 *         description: "successful operation"
 */
referralRouter.post(
  '/:wallet/register',
  isAuth.validateToken,
  referralValidator.register(),
  referralCtrl.register,
);

/**
 * @swagger
 * /api/referral/{wallet}/setReferral:
 *   put:
 *     tags:
 *       - Referral
 *     security:
 *       - bearerAuth: []
 *     description: referral 등록
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - in: path
 *         name: wallet
 *         required: true
 *         description: wallet address
 *         schema:
 *           type: string
 *           example: '0xdc926E34E73292cD7c48c6fD7375af7D93435D36'
 *     requestBody:
 *       description: referral registration data
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/SetReferral'
 *     responses:
 *       "200":
 *         description: "successful operation"
 */
referralRouter.put(
  '/:wallet/setReferral',
  isAuth.validateToken,
  referralValidator.setReferral(),
  referralCtrl.setReferral,
);

/**
 * @swagger
 * /api/referral/top/{num}:
 *   get:
 *     tags:
 *       - Referral
 *     description: referral top n 조회
 *     produces:
 *     - "application/json"
 *     parameters:
 *       - in: path
 *         name: num
 *         required: true
 *         description: top n
 *         schema:
 *           type: integer
 *           example: 100
 *     responses:
 *       "200":
 *         description: "successful operation"
 */
referralRouter.get('/top/:num', referralValidator.getTop(), referralCtrl.getTop);

module.exports = referralRouter;
