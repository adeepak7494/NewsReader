import { HttpHeaders, HttpParams } from '@angular/common/http';

export class NewsApiRequest {
  url: string;
  params: HttpParams;
  headers: HttpHeaders;
  constructor(url: string, params: HttpParams, headers: HttpHeaders) {
    this.url = url;
    this.params = params;
    this.headers = headers;
  }
}
