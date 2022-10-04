import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm'
import { Customer } from './customer.model'

export type RoleType = "admin" | "customer"

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  role_id: number

  @Column({
    type: "enum",
    enum: ["admin", "customer"],
    default: ["admin"]
  })
  role_name: RoleType

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Customer, (customer) => customer.role)
  customer: Customer[]
} 