import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthedRequest } from 'src/auth/dto/authed-request';
import { Public } from 'src/shared/decorators/public.decorator';
import { Role } from 'src/shared/decorators/role.decorator';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { PagingResponse } from 'src/shared/dtos/paging-response.dto';
import { SearchRequest } from 'src/shared/dtos/search-request.dto';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { UpdateStatusRequest } from 'src/shared/dtos/update-status-request.dto';
import { StdResponseCode } from 'src/shared/enums/std-response-code';
import { UserRole } from 'src/shared/enums/user-role';
import { AddUserWithRoleRequest } from './dto/add-user-with-role-request.dto';
import { CheckEmailRequest } from './dto/check-email-request.dto';
import { CheckResponse } from './dto/check-response.dto';
import { CheckUsernameRequest } from './dto/check-username-request.dto';
import { UpdateEmailRequest } from './dto/update-email-request.dto';
import { UpdateUserFirstLastNameRequest } from './dto/update-user-first-last-name-request.dto';
import { UpdateUserRoleRequest } from './dto/update-user-role-request.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Role(UserRole.ADMIN)
  @Get('/search')
  @ApiResponse({
    type: PagingResponse,
  })
  @ApiBearerAuth()
  searchUser(@Query() request: SearchRequest) {
    return this.userService.searchUser(request);
  }

  @Public()
  @Get('/check-email')
  @ApiResponse({
    type: CheckResponse
  })
  async checkEmail(@Query() request: CheckEmailRequest) {
    const exists = await this.userService.findOneByEmail(request.email);
    return CheckResponse.of(!!exists);
  }

  @Public()
  @Get('/check-username')
  @ApiResponse({
    type: CheckResponse
  })
  async checkUsername(@Query() request: CheckUsernameRequest) {
    const exists = await this.userService.findOneByUsername(request.username);
    return CheckResponse.of(!!exists);
  }

  @Role(UserRole.ADMIN)
  @Post()
  @ApiResponse({
    type: StdResponse,
  })
  @ApiBearerAuth()
  async addUser(@Body() request: AddUserWithRoleRequest) {
    const newUser = await this.userService.addUser(request);
    return StdResponse.of(StdResponseCode.SUCCESS, newUser.id);
  }

  @Put('/update-email')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async updateEmail(
    @Request() req: AuthedRequest,
    @Body() body: UpdateEmailRequest,
  ) {
    const isSuccess = await this.userService.updateEmail(
      req.user.id,
      body.email,
      body.otp,
    );
    return BooleanResponse.of(isSuccess);
  }

  @Put('/update-first-last-name')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async updateFirstLastName(
    @Request() req: AuthedRequest,
    @Body() body: UpdateUserFirstLastNameRequest,
  ) {
    const isSuccess = await this.userService.updateFirstLastName(
      req.user.id,
      body.firstName,
      body.lastName,
    );
    return BooleanResponse.of(isSuccess);
  }

  @Role(UserRole.ADMIN)
  @Put('/update-role/:id')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async updateRole(
    @Param('id') id: number,
    @Body() request: UpdateUserRoleRequest,
  ) {
    const isSuccess = await this.userService.updateRole(id, request.role);
    return BooleanResponse.of(isSuccess);
  }

  @Role(UserRole.ADMIN)
  @Put('/update-status/:id')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async updateStatus(
    @Param('id') id: number,
    @Body() request: UpdateStatusRequest,
  ) {
    const isSuccess = await this.userService.updateStatus(id, request.status);
    return BooleanResponse.of(isSuccess);
  }
}
