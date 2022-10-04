import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne
} from 'typeorm'
import { Role } from './role.model'

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

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Role, (role) => role.customer)
  role: Role
} 