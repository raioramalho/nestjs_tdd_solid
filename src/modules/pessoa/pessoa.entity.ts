export default class Pessoa {
  private CODPES?: number;
  private CODEND?: number;
  private NOME: string;
  private SOBRENOME: string;
  private CPF: string;
  private TELEFONE: string;

  constructor(NOME: string, SOBRENOME: string, CPF: string, TELEFONE: string) {
    this.NOME = NOME;
    this.SOBRENOME = SOBRENOME;
    this.CPF = CPF;
    this.TELEFONE = TELEFONE;
  }

  public getNome(): string {
    return this.NOME;
  }

  public getSobreNome(): string {
    return this.SOBRENOME;
  }

  public getCPF(): string {
    return this.CPF;
  }

  public getTelefone(): string {
    return this.TELEFONE;
  }

  public setCODPES(CODPES: number): void {
    this.CODPES = CODPES;
  }

  public setCODEND(CODEND: number): void {
    this.CODEND = CODEND;
  }

  public getCODPES(): number {
    return this.CODPES;
  }

  public getCODEND(): number {
    return this.CODEND;
  }

  public getPessoa(): Pessoa {
    return this;
  }
}
