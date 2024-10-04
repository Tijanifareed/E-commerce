import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item{
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     item_name: string;

     @Column()
     item_price: number;

     @Column()
     stock: number;
}