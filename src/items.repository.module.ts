import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemService } from '../src/services/item.service';
import { ItemRepository } from '../src/repositories/items.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ItemRepository])], // Register the custom repository
  providers: [ItemService],
  exports: [ItemService], // If other modules need access to ItemService
})
export class ItemModule {}
