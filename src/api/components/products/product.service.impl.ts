import { Service } from "typedi";
import { IProductManagementService } from "./product.service.interface";
import { ProductRepository } from "./product.repository";
import { ProductDto, validateCreateProduct, validateUpdateProduct } from "./product.dto";
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

    async getProductListing(): Promise<ProductDto[]> {
        var products = await this.productRepository.find();

        return products;
    }

    async getProductByCode(code: string): Promise<ProductDto> {
        var product = await this.productRepository.findByCode(code);

        if (product == null) {
            throw new CustomHttpError(400, "Product does not exists!");
        }

        return product;
    }
    

    async getProductById(id: string | number): Promise<ProductDto> {
        var product = await this.productRepository.findById(id);

        if (product == null) {
            throw new CustomHttpError(400, "Product does not exists!");
        }

        return product;
    }


    async updateProduct(id: number, data: ProductDto): Promise<ProductDto> {
        
        const { error } = validateCreateProduct(data);
        
        if (error) {
            throw new CustomHttpError(400, `Invalid requests. ${error.message}`);
        }

        var product = await this.productRepository.findById(id);

        if (product == null) {
            throw new CustomHttpError(400, "Product does not exists!");
        }

        product.name = data.name;
        product.code = data.code;
        product.description = data.description;
        product.vendor = data.vendor;
        product.amount = data.amount;
        product.discount = data.discount;
        product.image = data.image;

        product = await this.productRepository.save(product);

        return product;
    }

    async deleteProduct(id: number): Promise<void> {
        
        var product = await this.productRepository.findById(id);

        if (product == null) {
            throw new CustomHttpError(400, "Product does not exists!");
        }

        await this.productRepository.delete(id);

    }
}