import { IEndereco } from 'src/modules/endereco/entity/endereco.entity';
import { CepService } from './cep.service';

describe('Testes para o CepService', () => {
  it('Deve buscar informações de um CEP existente a partir do CEP', async () => {
    const cepService: CepService = new CepService();
    const data: IEndereco = await cepService.buscarCep(
      '25041390',
      25,
      'Padaria Rosario',
    );

    expect(data.CEP).toBe('25041-390');
    expect(data.UF).toBe('RJ');
    expect(data.NUMERO).toBe(25);
    expect(data.ENDERECO).toBe('Rua Almeida Júnior');
    expect(data.ESTADO).toBe('Duque de Caxias');
  });
});
