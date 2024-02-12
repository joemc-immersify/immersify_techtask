import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Customer } from './Customer'
import { Product } from './Product'

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
      id: number

    @Column({ type: 'text' })
      review: string

    @Column({ type: 'int' })
      rating: number

    @ManyToOne(() => Customer)
      customer: Customer

    @ManyToOne(() => Product)
      product: Product
}