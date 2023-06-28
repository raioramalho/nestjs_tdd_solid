import { Test } from '@nestjs/testing';
import { PrismaService } from './prisma.service';

describe('Bateria de testes para o prisma', () => {
  it('É possivel instaciar o prismaService', () => {
    const prisma = new PrismaService();
    expect(prisma).toBeDefined();
  });

});
