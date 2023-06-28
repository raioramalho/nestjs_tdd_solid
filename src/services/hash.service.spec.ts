import HashService from './hash.service';

describe('Testes para o HashService', () => {
  it('Deve gerar um novo hash a partir da senha', async () => {
    const hashService: HashService = new HashService();
    expect(await hashService.gerarHash('123senha'));
  });

  it('Deve vefiricar a senha correta com o hash gerado', () => {
    const hashService: HashService = new HashService();
    const hash = hashService.gerarHash('123senha');
    expect(hashService.compararHash('123senha', hash)).toBe(true);
  });

  it('Deve vefiricar a senha errada com o hash gerado', () => {
    const hashService: HashService = new HashService();
    const hash = hashService.gerarHash('123senha');
    expect(hashService.compararHash('senhaErrada', hash)).toBe(false);
  });
});
