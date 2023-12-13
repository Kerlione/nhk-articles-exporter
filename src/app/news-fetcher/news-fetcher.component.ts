import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { invalidUrlValidator } from '../shared/validators/url/malformed-url.directive';
import { forbiddenUrlValidator } from '../shared/validators/url/forbidden-url.directive';
import { environment } from '../../environments/environment';
import { NewsRetrievalService } from '../news-retrieval.service';
import { Observable, merge, reduce, combineLatestWith } from 'rxjs';
import { Article } from '../models/article';
import { NewsParsingService } from '../news-parsing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-fetcher',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './news-fetcher.component.html',
  styleUrl: './news-fetcher.component.css',
})
export class NewsFetcherComponent implements OnInit {
  newsUrl!: FormControl;
  article$!: Observable<Article>;
  nhkNewsPlaceholder =
    environment.newsUrlBaseHref + '1234567123456/1234567123456.html';

  ngOnInit(): void {
    this.newsUrl = new FormControl('', [
      Validators.required,
      Validators.minLength(environment.newsUrlBaseHref.length),
      invalidUrlValidator(),
      forbiddenUrlValidator(new URL(environment.newsUrlBaseHref)),
    ]);
  }

  constructor(
    private newsRetrievalService: NewsRetrievalService,
    private newsParsingService: NewsParsingService
  ) {
    this.newsRetrievalService = newsRetrievalService;
    this.newsParsingService = newsParsingService;
  }

  loadNewsArticle() {
    if (this.newsUrl.invalid) {
      return;
    }
    const getArticle = this.newsRetrievalService.loadNewsDocument(
      this.newsUrl.value
    );
    const getVocabulary = this.newsRetrievalService.loadNewsDictionary(
      this.newsUrl.value
    );
    getArticle
      .pipe(combineLatestWith(getVocabulary))
      .subscribe(([article, vocabulary]) => {
        this.article$ = this.newsParsingService.processResponses(
          article,
          vocabulary
        );
      });
  }

  hideFurigana() {
    document
      .querySelectorAll('rt')
      .forEach((x) => x.setAttribute('style', 'display: none;'));
  }
}
