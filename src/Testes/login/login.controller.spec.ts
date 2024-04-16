import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from '../../Controllers/LoginController';
import { LoginService } from '../../Services/LoginService';

describe('LoginController', () => {
    // eslint-disable-next-line init-declarations
    let controller: LoginController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [LoginController],
            providers: [LoginService],
        }).compile();

        controller = module.get<LoginController>(LoginController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
