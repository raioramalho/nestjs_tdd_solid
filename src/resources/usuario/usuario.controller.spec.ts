import { PrismaService } from 'src/services/prisma.service';
import CadastraUsuarioDto from './dto/cadastraUsuario.dto';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { HashService } from 'src/services/hash.service';

describe('Bateria de testes relacionada ao UsuarioController', () => {
  new PrismaClient().usuario.deleteMany();

  let usuarioController: UsuarioController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [UsuarioService, PrismaService, HashService],
    }).compile();

    usuarioController = app.get<UsuarioController>(UsuarioController);
  });

  it('Deve cadastrar um novo usuario', async () => {
    const usuario = {
      EMAIL: 'alan.ramalho@thinklife.com.br',
      SENHA: '123senha',
    };

    const novoUsuario = await usuarioController.cadastrar(usuario);

    expect(novoUsuario.EMAIL).toBe(usuario.EMAIL);
  });

  it('Deve listar todos os usuarios', async () => {
    
    const usuario = {
      EMAIL: "ramalho.sit@gmail.com",
      SENHA: "123senha"
    }

    await usuarioController.cadastrar(usuario);

    const usuarios = await usuarioController.listar();

    expect(usuarios.length).toBe(2);


  })

  it('Deve buscar um usuario pelo CODUSU', async () => {});

  it('Deve buscar um usuario pelo EMAIL', async () => {});

});
