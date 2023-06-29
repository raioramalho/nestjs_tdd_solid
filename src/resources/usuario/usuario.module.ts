import { PrismaService } from 'src/services/prisma.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { Module } from '@nestjs/common';
import HashService from 'src/services/hash.service';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaService, HashService],
})
export class UsuarioModule {}
