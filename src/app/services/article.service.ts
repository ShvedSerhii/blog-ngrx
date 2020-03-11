import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends EntityCollectionServiceBase<Article> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Article', serviceElementsFactory);
  }
}
