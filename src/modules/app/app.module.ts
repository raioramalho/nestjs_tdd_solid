import { Module } from '@nestjs/common';
import { EnderecoModule } from '../endereco/endereco.module';
import { PessoaModule } from '../pessoa/pessoa.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UsuarioModule, PessoaModule, EnderecoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
