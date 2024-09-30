const express = require('express');
const pointRouter = new express.Router();
const pointCtrl = require('../controller/point.ctrl');
const pointValidator = require('../validators/point.validator');
const isAuth = require('../utils/validate_token');

/**
 * @swagger
 * tags:
 *   name: Point
 *   description: point api
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
 * /api/point/{wallet}:
 *   get:
 *     tags:
 *       - Point
 *     description: point 이력 조회
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
pointRouter.get('/:wallet', pointValidator.getPoints(), pointCtrl.getPoints);

/**
 * @swagger
 * /api/point/{wallet}/addpoint:
 *   post:
 *     tags:
 *       - Point
 *     security:
 *       - bearerAuth: []
 *     description: point 등록
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
 *             $ref: '#/definitions/AddPoint'
 *     responses:
 *       "200":
 *         description: "successful operation"
 */
pointRouter.post(
  '/:wallet/addpoint',
  isAuth.validateToken,
  pointValidator.addPoint(),
  pointCtrl.addPoint,
);

module.exports = pointRouter;
