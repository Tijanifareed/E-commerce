import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entites/items.entity';
import {ItemRepository} from './repositories/items.repository';
import {Order} from './entites/order.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Freddie2810.',
      database: 'store',
      entities: [Item, Order],
      synchronize: true,
      logging: true,
      }
    ),
    TypeOrmModule.forFeature([Item, Order]),
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
