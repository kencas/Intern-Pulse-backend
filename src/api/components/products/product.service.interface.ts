import { ProductDto } from "./product.dto";

export interface IProductManagementService {
    
    createProduct(crrateProduct: ProductDto): Promise<ProductDto>;
    getProductListing(): Promise<ProductDto[]>;
    getProductByCode(code: string): Promise<ProductDto>;
    getProductById(id: number | string): Promise<ProductDto>;
    updateProduct(id: number, data: ProductDto): Promise<ProductDto>;
    deleteProduct(id: number | string): Promise<void>;
}