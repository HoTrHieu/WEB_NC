import Axios from "axios";
import { AuthService } from "./modules/auth/AuthService";
import { AuthedApiEndpoints } from "./shared/constants/ApiEndpoint";

export function initAxiosInterceptors() {
  Axios.interceptors.request.use((req) => {
    const accessToken = AuthService.accessToken;
    if (!accessToken) {
      if (AuthedApiEndpoints.includes(req.url as any)) {
        window.location.pathname = "/auth/login";
      }
    } else {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }

    return req;
  });

  Axios.interceptors.response.use(
    (resp) => resp,
    async (err) => {
      if (AuthedApiEndpoints.includes(err.config.url as any)) {
        if (err?.response?.status === 401) {
          if (!!(await AuthService.refreshAccessToken())) {
            return Axios.request(err.config);
          }
          window.location.pathname = "/auth/login";
          return;
        }
      }
      throw err;
    }
  );
}
