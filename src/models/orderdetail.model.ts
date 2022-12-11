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
  id: number

  @Column()
  quantity: number

  @Column({ type: "double precision", default: 0 })
  total: number

  @BeforeInsert()
  async calculateTotal() {
    const value = await Product.findOne(
      {
        where: {
          id: Number(this.product)
        }
      }
    )
    if (value) {
      this.total = this.quantity * value?.product_price
    }
  }

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Product, (product) => product.orderdetail)
  product: Product

  @ManyToOne(() => Order, (order) => order.orderdetail)
  order: Order
}