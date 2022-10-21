import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm'

@Entity()
export class Admin extends BaseEntity {
  @PrimaryGeneratedColumn()
  admin_id: number

  @Column()
  full_name: string

  @Column({ unique: true })
  username: string

  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
} 