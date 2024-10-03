import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      // entities: [Quote],
      synchronize: true,
      }
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
