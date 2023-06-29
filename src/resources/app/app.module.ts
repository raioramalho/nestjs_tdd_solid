import { Module } from '@nestjs/common';
import { CepService } from 'src/services/cep.service';
import { HashService } from 'src/services/hash.service';
import { PrismaService } from 'src/services/prisma.service';
import { EnderecoModule } from '../endereco/endereco.module';
import { PessoaModule } from '../pessoa/pessoa.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UsuarioModule, PessoaModule, EnderecoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, HashService, CepService],
})
export class AppModule {}
