import { Injectable } from '@nestjs/common';
import { HashService } from 'src/services/hash.service';

@Injectable()
export class AppService {
  constructor(private readonly hash: HashService) {}

  getHello(): string {
    const hash = this.hash.gerarHash('heeloo');
    return 'Hello World!';
  }
}
