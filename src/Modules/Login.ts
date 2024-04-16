import { Module } from '@nestjs/common';
import { LoginController } from 'src/Controllers/LoginController';
import { LoginService } from '../Services/LoginService';
import { TokenService } from '../Services/TokenService';
import { UsuarioRepository } from 'src/Repositories/UsuarioRepository';

@Module({
    controllers: [LoginController],
    providers: [LoginService, TokenService, UsuarioRepository],
    exports: [LoginService]
})
export class LoginModule {}
