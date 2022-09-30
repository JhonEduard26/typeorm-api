import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class Supplier extends BaseEntity {
  @PrimaryGeneratedColumn()
  supplier_id: number

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
}