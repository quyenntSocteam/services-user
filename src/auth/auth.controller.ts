import { Body, Controller, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { Request } from 'express'
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
        
    }
    @HttpCode(HttpStatus.OK)
    @Post('signup')
    signup(@Body() dto: AuthDto) {
        
        return this.authService.signup(dto)
    }
    @Post()
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto)
    }
}