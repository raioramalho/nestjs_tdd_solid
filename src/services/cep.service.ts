import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IEndereco } from 'src/modules/endereco/entity/endereco.interface';

@Injectable()
export class CepService {
  public async buscarCep(
    CEP: string,
    NUMERO: number,
    COMPLEMENTO: string,
  ): Promise<IEndereco> {
    const request = await axios.get(`http://viacep.com.br/ws/${CEP}/json`);

    const endereco: IEndereco = {
      CEP: request.data.cep,
      ENDERECO: request.data.logradouro,
      COMPLEMENTO,
      BAIRRO: request.data.bairro,
      UF: request.data.uf,
      ESTADO: request.data.localidade,
      NUMERO,
    };
    return endereco;
  }
}
