import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AboutRetrieverService {
  constructor(private http: HttpClient) { }

  configURL = 'assets/about_text.json';
  getConfig() {
    return this.http.get(this.configURL);
  }
}
