import { Service } from "typedi";
import { IProductManagementService } from "./product.service.interface";
import { ProductRepository } from "./product.repository";
import { ProductDto, validateCreateProduct } from "./product.dto";
import CustomHttpError from "../../../config/error.handler";

@Service()
export class ProductManagementService implements IProductManagementService{

    constructor(private readonly productRepository: ProductRepository) {

    }

    async createProduct(createProduct: ProductDto): Promise<ProductDto> {
        const { error } = validateCreateProduct(createProduct);
        if (error) {
            throw new CustomHttpError(400, `Invalid requests. ${error.message}`);
        }

        var product = await this.productRepository.findByCode(createProduct.code);

        if (product != null) {
            throw new CustomHttpError(400, "Product already exists!");
        }

        product = await this.productRepository.save(createProduct);

        return product;
        
    }

    async getProductByCode(code: string): Promise<ProductDto> {
        var product = await this.productRepository.findByCode(code);

        if (product == null) {
            throw new CustomHttpError(400, "Product does not exists!");
        }

        return product;
    }
    

}