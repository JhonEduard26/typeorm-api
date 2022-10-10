import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne
} from 'typeorm'
import { Customer } from './customer.model'

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  order_id: number

  @Column({ nullable: true })
  order_details: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer
} 