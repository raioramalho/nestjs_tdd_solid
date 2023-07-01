import { IEndereco } from 'src/modules/endereco/entity/endereco.entity';

export default class Endereco {
  private CODEND: number;
  private CEP: string;
  public ENDERECO: string;
  public NUMERO: number;
  public BAIRRO: string;
  public UF: string;
  public ESTADO: string;
  private COMPLEMENTO: string;

  constructor(endereco: IEndereco) {
    this.CEP = endereco.CEP;
    this.ENDERECO = endereco.ENDERECO;
    this.NUMERO = endereco.NUMERO;
    this.BAIRRO = endereco.BAIRRO;
    this.UF = endereco.UF;
    this.ESTADO = endereco.ESTADO;
    this.COMPLEMENTO = endereco.COMPLEMENTO;
  }

  public getCEP(): string {
    return this.CEP;
  }

  public setCODEND(CODEND: number): void {
    this.CODEND = CODEND;
  }

  public getCODEND(): number {
    return this.CODEND;
  }

  public getComplemento(): string {
    return this.COMPLEMENTO;
  }
}
