/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import { Request, Response, NextFunction } from 'express';

export default abstract class Controller<T> {
  abstract service: T;
}
