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
import { Role } from 'src/shared/decorators/role.decorator';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { PagingResponse } from 'src/shared/dtos/paging-response.dto';
import { SearchRequest } from 'src/shared/dtos/search-request.dto';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { UpdateStatusRequest } from 'src/shared/dtos/update-status-request.dto';
import { StdResponseCode } from 'src/shared/enums/std-response-code';
import { UserRole } from 'src/shared/enums/user-role';
import { AddUserWithRoleRequest } from './dto/add-user-with-role-request.dto';
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