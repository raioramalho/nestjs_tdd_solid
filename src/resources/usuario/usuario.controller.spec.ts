import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Usuario } from '@prisma/client';
import { AppModule } from 'src/app.module';
import * as request from 'supertest';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import CadastraUsuarioDto from './dto/cadastraUsuario.dto';

describe('Bateria de testes relacionada ao UsuarioController', () => {

  it('Deve cadastrar usuario', async () => {

    const usuarioService = new UsuarioService();
    const usuarioController = new UsuarioController(usuarioService);

    const usuario: CadastraUsuarioDto = {
      EMAIL: "alan.ramalho@thinklife.com.br",
      SENHA: "123senha"
    }

    const cadastra = await usuarioService.cadastra(usuario);

    console.log(cadastra);

  });
});
