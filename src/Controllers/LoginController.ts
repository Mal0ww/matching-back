import { Body,Controller, Post } from "@nestjs/common";
import { LoginService } from "../Services/LoginService";
import { TokenService } from "src/Services/TokenService";

@Controller("login")
export class LoginController {
    constructor(
        private readonly loginService: LoginService,
    ) {}

    @Post("entrar")
    async Login(
        @Body() 
            data: {
                email: string,
                senha: string
            }
    ): Promise<{}> {
        const {email, senha} = data;
        return await this.loginService.loginUsuario(email, senha);
    }
}
