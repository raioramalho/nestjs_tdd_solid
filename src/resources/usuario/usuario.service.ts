import {
  BadGatewayException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Prisma, PrismaClient, Usuario } from '@prisma/client';
import HashService from 'src/services/hash.service';
import { PrismaService } from 'src/services/prisma.service';
import CadastraUsuarioDto from './dto/cadastraUsuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly hashService: HashService,
  ) {}

  async cadastrar(data: CadastraUsuarioDto): Promise<Usuario> {
    try {
      const buscaUsuario = await this.prismaService.usuario.findUnique({
        where: {
          EMAIL: data.EMAIL,
        },
      });

      if (buscaUsuario) {
        throw new HttpException(
          'Este usuário já está cadastrado.',
          HttpStatus.CONFLICT,
        );
      }

      data.SENHA = this.hashService.gerarHash(data.SENHA);

      const cadastraUsuario = await this.prismaService.usuario.create({
        data,
      });

      if (!cadastraUsuario) {
        throw new HttpException(
          `Erro ao cadastrar novo usuário.`,
          HttpStatus.EXPECTATION_FAILED,
        );
      }

      return cadastraUsuario;
    } catch (error) {
      throw new HttpException(`${error?.message}`, HttpStatus.BAD_GATEWAY);
    }
  }

  async listar(): Promise<Usuario[]> {
    try {
        const usuarios = await this.prismaService.usuario.findMany();

        if(usuarios.length <= 0) {
            throw new HttpException('Nenhum usuário encontrado.', HttpStatus.NOT_FOUND);
        }

        return usuarios;

    } catch (error) {
        throw new HttpException(`${error?.message}`, HttpStatus.BAD_GATEWAY);
    }
  }
}
