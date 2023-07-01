import { PrismaService } from 'src/services/prisma.service';
import { PessoaController } from './pessoa.controller';
import { PessoaService } from './pessoa.service';
import { Module } from '@nestjs/common';
import { HashService } from 'src/services/hash.service';

@Module({
  imports: [],
  controllers: [PessoaController],
  providers: [PessoaService, PrismaService, HashService],
})
export class PessoaModule {}
