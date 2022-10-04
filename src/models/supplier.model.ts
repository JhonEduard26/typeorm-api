import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Product } from './product.model'

@Entity()
export class Supplier extends BaseEntity {
  @PrimaryGeneratedColumn()
  customer_id: number

  @Column()
  name: string

  @Column()
  address: string

  @Column()
  phone: string

  @Column()
  email: string

  @Column({ nullable: true })
  other_details: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Product, (product) => product.supplier)
  products: Product[]
}