const express = require('express');
const claimRouter = new express.Router();
const claimCtrl = require('../controller/claim.ctrl');
const claimValidator = require('../validators/claim.validator');
const isAuth = require('../utils/validate_token');

/**
 * @swagger
 * /api/claim/{wallet}:
 *   post:
 *     tags:
 *       - Claim
 *     security:
 *       - bearerAuth: []
 *     description: KSO 인출
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
 *     responses:
 *       "200":
 *         description: "successful operation"
 */
claimRouter.post('/:wallet', isAuth.validateToken, claimValidator.claim(), claimCtrl.claim);

module.exports = claimRouter;
