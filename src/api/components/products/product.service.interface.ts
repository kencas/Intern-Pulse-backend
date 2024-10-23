import { ProductDto } from "./product.dto";

export interface IProductManagementService {
    
    createProduct(crrateProduct: ProductDto): Promise<ProductDto>;
    getProductByCode(code: string): Promise<ProductDto>;
}