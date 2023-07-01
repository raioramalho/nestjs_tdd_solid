import Pessoa from './pessoa.entity';

describe('Testes para a classe de Pessoa', () => {
  it('Deve criar uma nova Pessoa', () => {
    const ramalho = new Pessoa(
      'Alan',
      'Ramalho',
      '000123000123-01',
      '(21)98311-0000',
    );
    ramalho.setCODPES(1);
    ramalho.setCODEND(2);
    expect(ramalho).toBeInstanceOf(Pessoa);
    expect(ramalho.getCODPES()).toBe(1);
    expect(ramalho.getCODEND()).toBe(2);
    expect(ramalho.getNome()).toBe('Alan');
    expect(ramalho.getSobreNome()).toBe('Ramalho');
    expect(ramalho.getCPF()).toBe('000123000123-01');
    expect(ramalho.getTelefone()).toBe('(21)98311-0000');
    expect(ramalho.getPessoa()).toBe(ramalho);
  });
});
