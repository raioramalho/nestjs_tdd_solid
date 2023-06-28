import { UsuarioController } from './usuario.controller';
import * as request from 'supertest';
import { UsuarioService } from './usuario.service';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/services/prisma.service';
import HashService from 'src/services/hash.service';
import Usuario from 'src/entitys/usuario.entity';

describe('Bateria de testes relacionada ao UsuarioController', () => {
  let usuarioController: UsuarioController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [UsuarioService, PrismaService, HashService],
    }).compile();

    usuarioController = app.get<UsuarioController>(UsuarioController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const usuario = {
        EMAIL: "alan.ramalho@thinklife.com.br",
        SENHA: "123senha"
      }
      expect(usuarioController.cadastra(usuario))
      .toBeInstanceOf(Usuario);
    });
  });


});
