import helmet from "helmet";
import { env } from "../../config/global";
import cors = require("cors");
import {Request, Response, NextFunction, Router, json } from "express";
import * as compression from "compression";

/**
 * Init Express middleware
 *
 * @param {Router} router
 * @returns {void}
 */
export function registerMiddleware(router: Router): void {
	router.use(helmet());

	if (env.NODE_ENV === 'development') {
		router.use(cors({ origin: '*' }));
	} else {
		router.use(cors({ origin: ['http://localhost:4200'] }));
	}

	router.use(json());
	router.use(compression());
}

/**
 * Init Express error handler
 *
 * @param {Router} router
 * @returns {void}
 */
export function registerErrorHandler(router: Router): Response | void {
	router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
		return res.status(500).json({
			error: err.message || err,
			status: 500
		});
	});
}