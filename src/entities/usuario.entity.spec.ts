import Usuario from './usuario.entity';

describe('Testes para a classe de Usuario', () => {
  it('Deve criar um novo Usuario', () => {
    const usuario = new Usuario('alan.ramalho@thinklife.com.br', '123senha');
    usuario.setCODUSU(1);
    expect(usuario).toBeInstanceOf(Usuario);
    expect(usuario.getCODUSU()).toBe(1);
    expect(usuario.getEmail()).toBe('alan.ramalho@thinklife.com.br');
    expect(usuario.getSenha()).toBe('123senha');
    expect(usuario.getLogado()).toBe(false);
  });
});
