import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('Bateria de testes relacionada ao UsuarioController', () => {
  let usuarioController: UsuarioController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [UsuarioService],
    }).compile();

    usuarioController = app.get<UsuarioController>(UsuarioController);
  });

  
    it('Deve cadastrar um usuario novo"', async () => {
      const test = await usuarioController.cadastra({
        EMAIL: "alan.ramalho@thinklife.com.br",
        SENHA: "123senha"
      });
      expect(test.EMAIL).toBe("alan.ramalho");
    });
  


});
