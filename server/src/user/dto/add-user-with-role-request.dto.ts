import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { Profile } from 'passport-google-oauth20';
import { UserRole } from 'src/shared/enums/user-role';
import { ClassUtils } from 'src/shared/utils/class.util';
import { AddUserRequest } from './add-user-request.dto';

export class AddUserWithRoleRequest extends AddUserRequest {
  @IsEnum(UserRole)
  @ApiProperty({ enum: UserRole })
  role: UserRole;

  static of(addUserRequest: AddUserRequest): AddUserWithRoleRequest {
    return ClassUtils.copyFields(addUserRequest, new AddUserWithRoleRequest());
  }

  static ofGoogleProfile(profile: Profile) {
    const req = new AddUserWithRoleRequest();
    req.username = null;
    req.password = null;
    req.firstName = profile.name.familyName + (!!profile.name.middleName ? ` ${profile.name.middleName}` : '');
    req.lastName = profile.name.givenName;
    req.email = profile.emails[0].value;
    req.role = UserRole.NORMAL;
    return req;
  }
}
