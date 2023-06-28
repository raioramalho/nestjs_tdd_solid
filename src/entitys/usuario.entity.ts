export default class Usuario {
  private CODUSU: number;
  private EMAIL: string;
  private SENHA: string;
  private LOGADO: boolean;

  constructor(EMAIL: string, SENHA: string) {
    this.EMAIL = EMAIL;
    this.SENHA = SENHA;
    this.LOGADO = false;
  }

  public setCODUSU(CODUSU: number) {
    this.CODUSU = CODUSU;
  }

  public getCODUSU(): number {
    return this.CODUSU;
  }

  public getEmail(): string {
    return this.EMAIL;
  }

  public getSenha(): string {
    return this.SENHA;
  }

  public getLogado(): boolean {
    return this.LOGADO;
  }
}
