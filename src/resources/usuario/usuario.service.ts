import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Usuario } from '@prisma/client';

import { PrismaService } from 'src/services/prisma.service';
import CadastraUsuarioDto from './dto/cadastraUsuario.dto';
import BuscarUsuarioDto from './dto/buscarUsuario.dto';
import AtualizaUsuarioDto from './dto/atualizaUsuario.dto';
import DeletarUsuarioDto from './dto/deletarUsuario.dto';
import { HashService } from 'src/services/hash.service';

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

      if (usuarios.length <= 0) {
        throw new HttpException(
          'Nenhum usuário encontrado.',
          HttpStatus.NOT_FOUND,
        );
      }

      return usuarios;
    } catch (error) {
      throw new HttpException(`${error?.message}`, HttpStatus.BAD_GATEWAY);
    }
  }

  async buscar(data: BuscarUsuarioDto): Promise<Usuario> {
    try {
      const usuario = await this.prismaService.usuario.findFirst({
        where: {
          EMAIL: data.EMAIL,
          CODUSU: data.CODUSU,
        },
      });

      if (!usuario) {
        throw new HttpException(
          'Nenhum usuário encontrado.',
          HttpStatus.NOT_FOUND,
        );
      }

      return usuario;
    } catch (error) {
      throw new HttpException(`${error?.message}`, HttpStatus.BAD_GATEWAY);
    }
  }

  async atualizar(data: AtualizaUsuarioDto): Promise<Usuario> {
    try {
      const buscarUsuario = await this.prismaService.usuario.findUnique({
        where: data,
      });

      if (!buscarUsuario) {
        throw new HttpException(
          'Nenhum usuário encontrado.',
          HttpStatus.NOT_FOUND,
        );
      }

      if (data.SENHA != undefined) {
        data.SENHA = this.hashService.gerarHash(data.SENHA);
      }

      const atualizarUsuario = await this.prismaService.usuario.update({
        where: data,
        data: data,
      });

      if (!atualizarUsuario) {
        throw new HttpException(
          'Erro ao atualizar usuario.',
          HttpStatus.EXPECTATION_FAILED,
        );
      }

      return atualizarUsuario;
    } catch (error) {
      throw new HttpException(`${error?.message}`, HttpStatus.BAD_GATEWAY);
    }
  }

  async deletar(data: DeletarUsuarioDto): Promise<Usuario> {
    try {
      const buscarUsuario = await this.prismaService.usuario.findUnique({
        where: data,
      });

      if (!buscarUsuario) {
        throw new HttpException(
          'Nenhum usuário encontrado.',
          HttpStatus.NOT_FOUND,
        );
      }

      const deletar = await this.prismaService.usuario.delete({
        where: data,
      });

      if (!deletar) {
        throw new HttpException(
          'Erro ao deletar usuário.',
          HttpStatus.EXPECTATION_FAILED,
        );
      }

      return deletar;
    } catch (error) {
      throw new HttpException(`${error?.message}`, HttpStatus.BAD_GATEWAY);
    }
  }
}
