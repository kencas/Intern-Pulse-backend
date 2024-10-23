import * as express from "express";

export class Server {
	private readonly _app: express.Application = express();

	public constructor() {
	}

	/**
	 * Get Express app
	 *
	 * @returns {express.Application} Returns Express app
	 */
	public get app(): express.Application {
		return this._app;
	}
}
