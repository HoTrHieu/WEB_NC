import Axios from "axios";
import { AuthService } from "./modules/auth/AuthService";
import { PublicApiEndpoints } from "./shared/constants/ApiEndpoint";

export function initAxiosInterceptors() {
  Axios.interceptors.request.use((req) => {
    if (!PublicApiEndpoints.includes(req.url as any)) {
      const accessToken = AuthService.accessToken;
      if (!accessToken) {
        window.location.pathname = "/authen";
      } else {
        req.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return req;
  });

  Axios.interceptors.response.use(
    (resp) => resp,
    async (err) => {
      if (!PublicApiEndpoints.includes(err.config.url as any)) {
        if (err?.response?.status === 401) {
          if (!!(await AuthService.refreshAccessToken())) {
            return Axios.request(err.config);
          }
          window.location.pathname = "/authen";
          return;
        }
      }
      throw err;
    }
  );
}
