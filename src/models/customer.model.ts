import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm'
import { Order } from './order.model'

@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  customer_id: number

  @Column()
  full_name: string

  @Column()
  address: string

  @Column()
  phone: string

  @Column({ nullable: true, unique: true })
  email: string

  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[]
} 