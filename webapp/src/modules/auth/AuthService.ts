import Axios from "axios";
import { ApiEndpoint } from "../../shared/constants/ApiEndpoint";
import { IUser } from "../../shared/entities/IUser";
import { UserRole } from "../../shared/enums/UserRole";
import { CrudService } from "../../shared/services/CrudService";
import { IRegisterRequest } from "./types/IRegisterRequest";
import qs from 'querystring';

interface ITokenResponse {
  accessToken: string;
  refreshToken: string;
}

export class AuthService {
  public static user: IUser;
  private static readonly ACCESS_TOKEN_KEY = "FDM_ACCESS_TOKEN";
  private static readonly REFRESH_TOKEN_KEY = "FDM_REFRESH_TOKEN";

  static get isAuthed() {
    const params: any = qs.parse(window.location.search.replace('?', ''));
    if (!!params.accessToken && !!params.refreshToken) {
      this.saveTokens(params);
    }
    return !!this.accessToken;
  }

  static get accessToken() {
    return sessionStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  static get refreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  private static saveTokens(response: ITokenResponse) {
    sessionStorage.setItem(this.ACCESS_TOKEN_KEY, response.accessToken);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, response.refreshToken);
    return response;
  }

  static async login(username: string, password: string) {
    try {
      const { data } = await Axios.post(ApiEndpoint.auth.login, {
        username,
        password,
      });
      return this.saveTokens(data);
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  static clearTokens() {
    sessionStorage.removeItem(this.ACCESS_TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }

  static logout() {
    this.clearTokens();
    window.location.pathname = "/";
  }

  static async refreshAccessToken() {
    if (!this.refreshToken) {
      return false;
    }

    try {
      const { data } = await Axios.post(
        ApiEndpoint.auth.refreshAccessToken,
        null,
        {
          params: { refreshToken: this.refreshToken },
        }
      );
      return this.saveTokens(data);
    } catch (err) {
      if (err?.response?.status === 404) {
        this.logout();
      } else {
        console.error(err);
      }
      return false;
    }
  }

  static async getUser() {
    if (this.isAuthed) {
      if (!this.user) {
        this.user = await this.getProfile();
      }
      return this.user;
    }
    return null;
  }

  private static async getProfile() {
    try {
      const result = await Axios.get(ApiEndpoint.auth.getProfile);
      return result.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static changePassword(oldPassword: string, newPassword: string) {
    return CrudService.put(ApiEndpoint.auth.changePassword, {
      oldPassword,
      newPassword,
    });
  }

  static get isAdmin() {
    return this.user.role === UserRole.ADMIN;
  }

  static register(user: IRegisterRequest) {
    return CrudService.create(ApiEndpoint.auth.register, user);
  }
}
