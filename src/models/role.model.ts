import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany
} from 'typeorm'
import { Customer } from './customer.model'

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  role_id: number

  @Column({
    nullable: false,
    default: "admin"
  })
  role_name: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Customer, (customer) => customer.role)
  customer: Customer[]
}