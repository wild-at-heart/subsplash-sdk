import axios from 'axios';
axios.defaults.baseURL = 'https://core.subsplash.com';
import { API } from './API';

export interface AuthenticationData {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export class Authenticatable extends API {
  authentication?: AuthenticationData;

  constructor() {
    super();
  }

  public async authenticate(config: {
    clientId?: string;
    clientSecret?: string;
    appKey?: string;
  }) {
    if (!config.clientId || !config.clientSecret || !config.appKey) {
      throw new Error('clientId, clientSecret, and scope are required');
    }

    const response = await this.api.post(
      '/tokens/v1/token',
      {
        grant_type: 'client_credentials',
        client_id: config.clientId,
        client_secret: config.clientSecret,
        scope: `app:${config.appKey}`,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    this.authentication = response.data;

    return response.data;
  }

  public async login(email: string, password: string, appKey: string) {
    try {
      if (!email || !password || !appKey) {
        throw new Error('email, password, and scope are required');
      }

      const response = await this.api.post(
        '/accounts/v1/oauth/token',
        {
          grant_type: 'password',
          email,
          password,
          scope: `app:${appKey}`,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      this.authentication = response.data;
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public async get_authorization_header() {
    if (this.authentication) {
      return {
        Authorization: `Bearer ${this.authentication.access_token}`,
      };
    } else {
      return null;
    }
  }
}
