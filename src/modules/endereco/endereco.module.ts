import { PrismaService } from 'src/services/prisma.service';
import { EnderecoController } from './entity/endereco.controller';
import { EnderecoService } from './endereco.service';
import { Module } from '@nestjs/common';
import { CepService } from 'src/services/cep.service';

@Module({
  imports: [],
  controllers: [EnderecoController],
  providers: [EnderecoService, PrismaService, CepService],
})
export class EnderecoModule {}
