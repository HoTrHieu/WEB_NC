import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Put,
  Query,
  Req,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiExcludeEndpoint,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from 'src/shared/decorators/public.decorator';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { User } from 'src/shared/entities/user.entity';
import { StdResponseCode } from 'src/shared/enums/std-response-code';
import { AuthService } from './auth.service';
import { AuthedRequest } from './dto/authed-request';
import { ChangePasswordRequest } from './dto/change-password-request.dto';
import { LoginRequest } from './dto/login-request.dto';
import { LoginResponse } from './dto/login-response.dto';
import { RegisterRequest } from './dto/register-request.dto';
import { GoogleAuthGuard } from './guard/google.guard';
import { LocalAuthGuard } from './guard/local.guard';
import { TokenService } from './token/token.service';

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
  ) {}

  @Public()
  @Post('/register')
  @ApiResponse({
    type: StdResponse
  })
  async register(@Body() request: RegisterRequest) {
    const newUser = await this.authService.register(request);
    return StdResponse.of(StdResponseCode.SUCCESS, newUser.id);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @ApiBody({
    type: LoginRequest,
  })
  @ApiResponse({
    type: LoginResponse,
  })
  @Public()
  login(@Request() req: AuthedRequest) {
    return this.authService.login(req.user);
  }

  @Get('/login/google')
  @UseGuards(GoogleAuthGuard)
  @Public()
  async googleLogin(@Req() req) {}

  @Get('/redirect/google')
  @UseGuards(GoogleAuthGuard)
  @Public()
  googleRedirect(@Req() req) {
    return this.authService.login(req.user);
  }

  @Post('/refresh-access-token')
  @ApiResponse({
    type: LoginResponse,
  })
  @Public()
  refreshAccessToken(@Query('refreshToken') refreshToken: string) {
    return this.tokenService.getAccessTokenFromRefreshToken(refreshToken);
  }

  @Post('/logout')
  @ApiExcludeEndpoint()
  logout() {
    // TODO: implement this method
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/profile')
  @ApiResponse({
    type: User,
  })
  @ApiBearerAuth()
  getProfile(@Request() req: AuthedRequest) {
    return this.authService.getProfile(req.user);
  }

  @Put('/change-password')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async changePassword(@Body() body: ChangePasswordRequest, @Request() req) {
    const isSuccess = await this.authService.changePassword(
      req.user.id,
      body.oldPassword,
      body.newPassword,
    );
    return BooleanResponse.of(isSuccess);
  }
}
