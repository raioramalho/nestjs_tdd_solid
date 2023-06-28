import { UsuarioModule } from './resources/usuario/usuario.module';
import { PessoaModule } from './resources/pessoa/pessoa.module';
import { EnderecoModule } from './resources/endereco/endereco.module';
import { EnderecoController } from './resources/endereco/endereco.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import CepService from './services/cep.service';
import HashService from './services/hash.service';

@Module({
  imports: [UsuarioModule, PessoaModule, EnderecoModule],
  controllers: [AppController],
  providers: [AppService, CepService, HashService],
})
export class AppModule {}
