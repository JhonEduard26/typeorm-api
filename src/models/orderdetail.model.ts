import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,

} from 'typeorm'
import { Order } from './order.model'
import { Product } from './product.model'

@Entity()
export class OrderDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  order_detail_id: number

  @Column({ type: "double precision" })
  unit_price: number

  @Column()
  quantity: number

  @Column({ type: "double precision" })
  total: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Product, (product) => product)
  product: Product

  @ManyToOne(() => Order, (order) => order.orderdetail)
  order: Order
}