import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DictionaryResponse } from './models/nhk/dictionary-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsRetrievalService {
  constructor(private http: HttpClient) {}

  loadNewsDocument(url: string) : Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }

  loadNewsDictionary(url: string) : Observable<DictionaryResponse> {
    const dictionaryUrl = url.replace('html', 'out.dic');
    const urlObject = new URL(dictionaryUrl);
    urlObject.searchParams.append('date', new Date().getTime().toString());
    return this.http.get<DictionaryResponse>(urlObject.toString(), {
      responseType: 'json',
    });
  }
}
