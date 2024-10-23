import Container, { Service } from "typedi";
import { NextFunction, Request, Response } from "express";
import Controller from "../../base/controller";
import { ProductManagementService } from "./product.service.impl";
import { ProductDto } from "./product.dto";
import { success } from "../../util/response";

@Service()
export class ProductController extends Controller<ProductManagementService> {
    service = Container.get(ProductManagementService);

    async createProduct(request: Request, response: Response, next: NextFunction) {
        try 
        {
            const req: ProductDto = request.body;

            const result = await this.service.createProduct(req);
            return success(response, 201, result, "Product created successfully");
        }
        catch (err)
        {
            next(err);
        }
    
    }

    async getProductListing(request: Request, response: Response, next: NextFunction) {
        try 
        {
            const result = await this.service.getProductListing();
            return success(response, 201, result, "Products listed successfully");
        }
        catch (err)
        {
            next(err);
        }
    
    }


    async getProductByCode(request: Request, response: Response, next: NextFunction) {
        try 
        {
            const result = await this.service.getProductByCode(request.params.code);
            return success(response, 201, result, "Product Listed successfully");
        }
        catch (err)
        {
            next(err);
        }
    
    }

    async getProductById(request: Request, response: Response, next: NextFunction) {
        try 
        {
            const result = await this.service.getProductById(request.params.id);
            return success(response, 200, result, "Product Listed successfully");
        }
        catch (err)
        {
            next(err);
        }
    
    }


    async updateProduct(request: Request, response: Response, next: NextFunction) {
        const req: ProductDto = request.body;
        try 
        {
            const result = await this.service.updateProduct(parseInt(request.params.id.toString()), req);
            return success(response, 201, result, "Product updated successfully");
        }
        catch (err)
        {
            next(err);
        }
    
    }

    async deleteProduct(request: Request, response: Response, next: NextFunction) {
        try 
        {
            const result = await this.service.deleteProduct(parseInt(request.params.id.toString()));
            return success(response, 201, result, "Product Data deleted successfully");
        }
        catch (err)
        {
            next(err);
        }
    
    }

}
