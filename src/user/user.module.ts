import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// Importa la entidad

@Module({
  imports: [], // Registra la entidad aquí
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
