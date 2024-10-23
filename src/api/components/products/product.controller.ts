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
            return success(response, 201, result, "User Data deleted successfully");
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
            return success(response, 201, result, "User Data deleted successfully");
        }
        catch (err)
        {
            next(err);
        }
    
    }

}
