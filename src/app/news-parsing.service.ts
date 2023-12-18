import { Injectable } from '@angular/core';
import { DictionaryResponse } from './models/nhk/dictionary-response';
import parse from 'node-html-parser';
import { Article } from './models/article';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsParsingService {
  constructor() {}

  processResponses(article: string, dictionary: DictionaryResponse) {
    const parsedDocument = parse(article);

    const paragraphs = parsedDocument.querySelectorAll('#js-article-body p');
    const vocabularyInArticle = [
      ...new Set(parsedDocument.querySelectorAll('a.dicWin').map((x) => x.id)),
    ];
    
    return of(new Article(
      paragraphs.map((x) => x.textContent),
      vocabularyInArticle,
      dictionary
    ));
  }
}
