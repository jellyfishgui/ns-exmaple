import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApplicationConfigService {
  private endpointPrefix = '';
  private microfrontend = false;
  private SERVER_API_URL = 'http://localhost:8080';

  setEndpointPrefix(endpointPrefix: string): void {
    this.endpointPrefix = endpointPrefix;
  }

  setMicrofrontend(microfrontend = true): void {
    this.microfrontend = microfrontend;
  }

  isMicrofrontend(): boolean {
    return this.microfrontend;
  }

  getEndpointFor(api: string, microservice?: string): string {
    if (microservice) {
      return `${this.endpointPrefix}services/${microservice}/${api}`;
    }
    console.error('env: ', process.env.MY_API_ENDPOINT, 'url', `${this.endpointPrefix}${api}`)
    return `${this.endpointPrefix}${api}`;
  }
}
