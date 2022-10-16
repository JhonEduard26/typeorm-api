import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  BeforeInsert,
} from 'typeorm'
import { Order } from './order.model'
import { Product } from './product.model'

@Entity()
export class OrderDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  order_detail_id: number

  @Column()
  quantity: number

  @Column({ type: "double precision", default: 0 })
  total: number

  @BeforeInsert()
  calculateTotal() {
    this.total = this.quantity * this.product.product_price
  }

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Product, (product) => product)
  product: Product

  @ManyToOne(() => Order, (order) => order.orderdetail)
  order: Order
}