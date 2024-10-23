import { Repository } from "typeorm";
import { IBaseRepository } from "./repository";

export abstract class BaseRepository<T> implements IBaseRepository<T> {

  protected abstract repository: Repository<T>;

  async save(item: T): Promise<T> {
    return await this.repository.save(item)
  }

  async update(id: number, item: T): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id)
  }

  async find(): Promise<T[]> {
    return await this.repository.find();
  }

  async findOne(data: T): Promise<T> {
    return await this.repository.findOne(<T>{ where: data })
  }

  async findById(id: number | string): Promise<T> {
    return await this.repository.findOne(<T>{ where: { id } })
  }
    
}
