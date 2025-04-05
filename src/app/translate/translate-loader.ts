import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<{ [key: string]: string }> {
    return this.http.get<{ [key: string]: string }>(`assets/i18n/${lang}.json`);
  }
}
export function HttpLoaderFactory(http: HttpClient) {
  return new CustomTranslateLoader(http);
}
