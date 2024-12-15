import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity'; // Importa la entidad

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Registra la entidad aquí
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
