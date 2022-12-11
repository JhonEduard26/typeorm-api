import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  OneToMany
} from 'typeorm'
import { Customer } from './customer.model'
import { OrderDetail } from './orderdetail.model'

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  details: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer

  @OneToMany(() => OrderDetail, (orderdetail) => orderdetail.order)
  orderdetail: OrderDetail[]
} 