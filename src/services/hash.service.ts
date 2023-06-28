import { Injectable } from '@nestjs/common';
import { compareSync, hashSync } from 'bcryptjs';


@Injectable()
export default class HashService {
  private clearText: string;
  private hash: string;

  public gerarHash(VALUE: string): string {
    const hash = hashSync(VALUE);
    return hash;
  }

  public compararHash(VALUE: string, HASH: string) {
    return compareSync(VALUE, HASH);
  }
}
