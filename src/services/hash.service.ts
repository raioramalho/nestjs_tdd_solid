import { compareSync, hashSync } from 'bcryptjs';

export default class HashService {
  private clearText: string;
  private hash: string;

  public gerarHash(VALUE: string): string {
    let hash = hashSync(VALUE);
    return hash;
  }

  public compararHash(VALUE: string, HASH: string) {
    return compareSync(VALUE, HASH);
  }
}
