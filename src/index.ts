import { env } from './config/global';
import * as express from "express";
import Container from 'typedi';
import * as swaggerUi from "swagger-ui-express";

import { AppDataSource } from "./config/app.datasource";

const swaggerDocument = require('./swagger.json');

import { config } from 'dotenv';
import { Server } from './server';
import { errorHandler } from "./config/error.handler";
import { ProductController } from './api/components/products/product.controller';
import helmet from 'helmet';
import cors = require('cors');

config();


// async function main()
// {
  
//   AppDataSource.initialize()
//   .then(()=>{
//       console.log("DB Now Running")
//   })
//   .catch(err => {
//       console.log(err)
//   })

  

//     const app: express.Application = new Server().app;
//     // app.use(express.json({ limit: '50mb' }));
//     // app.use(express.urlencoded({ limit: '50mb' }))
//     // app.use(helmet())
//     // app.use(cors())
//     // app.use(express.static('server'))


//     app.use(
//         '/api-docs',
//         swaggerUi.serve,
//         swaggerUi.setup(swaggerDocument)
//     );

//     //Register Error Handler
//     // app.use(errorHandler);
//     // Global Error Handler
//     app.use((err, req, res, next) => {
//         console.log(err.stack); // Log error details for debugging
//         res.status(200).json({
//         message: err.message, // Send error message to client
//         // You can include additional details here, like stack trace, in development mode
//         });
//     });


//     const productController = Container.get(ProductController);
//     app.get('/products/:code', (req, res, next) => productController.getProductByCode(req, res, next));
//     app.post('/products', (req, res, next) => productController.createProduct(req, res, next));
    
//     app.listen(env.NODE_PORT);
//     console.log(`Express server has started on port ${env.NODE_PORT}.`);

// }

// // Start the application
// main().catch(error => {
//   console.log(error)
//   // Capture any top-level error with Sentry
//   // Sentry.captureException(error);
// });


// const express = require('express');
    const app: express.Application = new Server().app;

  AppDataSource.initialize()
  .then(()=>{
      console.log("DB Now Running")
  })
  .catch(err => {
      console.log(err)
  })

  const productController = Container.get(ProductController);
    app.get('/products/:id', (req, res, next) => productController.getProductById(req, res, next));
    app.put('/products/:id', (req, res, next) => productController.updateProduct(req, res, next));
    app.delete('/products/:id', (req, res, next) => productController.deleteProduct(req, res, next));
    app.get('/products/:code', (req, res, next) => productController.getProductByCode(req, res, next));
    app.post('/products', (req, res, next) => productController.createProduct(req, res, next));
    app.get('/products', (req, res, next) => productController.getProductListing(req, res, next));

    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb' }))
    app.use(helmet())
    app.use(cors())
    app.use(express.static('server'))

    // Global Error Handler
    app.use(errorHandler);

        app.use(
        '/api-docs',
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument)
    );

    // Starting the server
    const PORT = env.NODE_PORT;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });


    