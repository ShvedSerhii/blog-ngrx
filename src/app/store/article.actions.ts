import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Article } from '../models/article.model';


export const loadArticles = createAction(
  '[Article/API] Load Articles', 
  props<{ articles: Article[] }>()
);

export const addArticle = createAction(
  '[Article/API] Add Article',
  props<{ article: Article }>()
);

export const upsertArticle = createAction(
  '[Article/API] Upsert Article', 
  props<{ article: Article }>()
);

export const addArticles = createAction(
  '[Article/API] Add Articles',
  props<{ articles: Article[] }>()
);

export const upsertArticles = createAction(
  '[Article/API] Upsert Articles',
  props<{ articles: Article[] }>()
);

export const updateArticle = createAction(
  '[Article/API] Update Article',
  props<{ article: Update<Article> }>()
);

export const updateArticles = createAction(
  '[Article/API] Update Articles',
  props<{ articles: Update<Article>[] }>()
);

export const deleteArticle = createAction(
  '[Article/API] Delete Article',
  props<{ id: string }>()
);

export const deleteArticles = createAction(
  '[Article/API] Delete Articles',
  props<{ ids: string[] }>()
);

export const clearArticles = createAction(
  '[Article/API] Clear Articles'
);
