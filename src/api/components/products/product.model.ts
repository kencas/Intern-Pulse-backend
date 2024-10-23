import {Entity, Column, Generated} from "typeorm";
import { BaseModel } from "../../base/model";


@Entity()
export class Product extends BaseModel {
    
    @Generated("uuid")  
    @Column()
    public productId?: string;

    @Column({ nullable: false, unique: true})
    public code?: string;

    @Column({ nullable: false})
    public name?: string;

    @Column({ nullable: false})
    public description?: string;

    @Column({ nullable: false})
    public amount?: number;
 
    @Column({ nullable: true})
    public discount?: number;

    @Column({ nullable: false})
    public vendor?: string;

    @Column({ nullable: false})
    public image?: string;

}
