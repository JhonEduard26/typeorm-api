import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Category } from './category.model';
import { Supplier } from './supplier.model';


@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  product_id: number

  @Column()
  product_name: string

  @Column()
  product_description: string

  @Column()
  product_unit: string

  @Column("double precision")
  product_price: number

  @Column()
  product_quantity: number

  @Column()
  product_status: boolean

  @Column({ nullable: true })
  other_details: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Category, (category) => category.products)
  category: Category

  @ManyToOne(() => Supplier, (supplier) => supplier.products)
  supplier: Supplier
}