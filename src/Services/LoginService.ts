import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TokenService } from './TokenService';
import { UsuarioRepository } from 'src/Repositories/UsuarioRepository';


@Injectable()
export class LoginService {

    constructor(
        private readonly tokenService: TokenService, 
        private readonly usuario: UsuarioRepository
    ){}

    async loginUsuario(
        email: string,
        senha: string,
    ): Promise<any> { 
        if (
            email === " " || 
            senha === " " ||
            email === undefined ||
            senha === undefined
            ) {
            throw new HttpException("Valores Vazios", HttpStatus.BAD_REQUEST);
        }

        const usuario = await this.usuario.loginUsuario(email, senha);
        if(usuario){
            return this.tokenService.gerarToken(usuario);
        }else{
            throw new HttpException("Usuario não autorizado", HttpStatus.UNAUTHORIZED);
        }
    }


}
