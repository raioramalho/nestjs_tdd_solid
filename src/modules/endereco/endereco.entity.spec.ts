import Endereco from './endereco.entity';
import { IEndereco } from './entity/endereco.entity';

describe('Testes para a classe de Endereco', () => {
  it('Deve criar um novo Endereco', () => {
    const dados: IEndereco = {
      CEP: '25041390',
      NUMERO: 25,
      COMPLEMENTO: 'Padaria Rosario',
    };
    const endereco = new Endereco(dados);
    endereco.setCODEND(2);
    expect(endereco).toBeInstanceOf(Endereco);
    expect(endereco.getCODEND()).toBe(2);
    expect(endereco.getCEP()).toBe('25041390');
    expect(endereco.getComplemento()).toBe('Padaria Rosario');
  });
});
