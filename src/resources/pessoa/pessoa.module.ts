import { PessoaController } from './pessoa.controller';
import { PessoaService } from './pessoa.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [PessoaController],
  providers: [PessoaService],
})
export class PessoaModule {}
