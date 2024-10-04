import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderId: string;

  @Column()
  customerId: number;

  @Column('json') // Store items as JSON
  items: { itemId: number; quantity: number }[];
}
