import { Service } from "typedi";
import { AppDataSource } from "../../../config/app.datasource";
import { BaseRepository } from "../../base/base.repository";
import { Product } from "./product.model";

@Service()
export class ProductRepository extends BaseRepository<Product> {

    repository = AppDataSource.getRepository(Product);

    async findByCode(code: string): Promise<Product> {
        return await this.repository.findOne({ where: { code } })
      }
}