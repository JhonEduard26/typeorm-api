import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany
} from 'typeorm'
import { Product } from './product.model'

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  category_id: number

  @Column()
  category_name: string

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Product, (product) => product.category)
  products: Product[]
} 