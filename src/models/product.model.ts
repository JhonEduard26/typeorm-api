import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Category } from './category.model';
import { OrderDetail } from './orderdetail.model';


@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  product_id: number

  @Column()
  product_name: string

  @Column()
  bar_code: string

  @Column("double precision")
  product_price: number

  @Column()
  stock_quantity: number

  @Column()
  status: boolean

  @Column({ nullable: true })
  other_details: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Category, (category) => category.products)
  category: Category

  @OneToMany(() => OrderDetail, (orderdetail) => orderdetail.product)
  orderdetail: OrderDetail[]
}