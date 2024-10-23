export interface IBaseRepository<T> {
    save(item: T): Promise<T>;
    update(id: number, item: T): Promise<void>;
    delete(id: string): Promise<void>;
    find(): Promise<T[]>;
    findOne(data: T): Promise<T>;
}