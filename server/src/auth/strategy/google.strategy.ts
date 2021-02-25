import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback, Profile  } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth.service';


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

  constructor(
    private config: ConfigService,
    private authService: AuthService
  ) {
    super({
      clientID: config.get('settings.google.clientId'),
      clientSecret: config.get('settings.google.clientSecret'),
      callbackURL: config.get('settings.google.callbackURL'),
      scope: ['email', 'profile'],
    });
  }

  async validate (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback): Promise<any> {
    const user = this.authService.validateGoogleLogin(profile);
    done(null, user);
  }
}