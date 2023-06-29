import { UsuarioModule } from './resources/usuario/usuario.module';
import { PessoaModule } from './resources/pessoa/pessoa.module';
import { EnderecoModule } from './resources/endereco/endereco.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import HashService from './services/hash.service';
import CepService from './services/cep.service';

@Module({
  imports: [UsuarioModule, PessoaModule, EnderecoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, HashService, CepService],
})
export class AppModule {}
