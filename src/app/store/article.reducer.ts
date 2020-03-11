import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ArticleActions from './article.actions';
import { Article } from '../models/article.model';

export const articlesFeatureKey = 'articles';



// export function selectArticleId(a: Article): number {
//   //In this case this would be optional since primary key is id
//   return a.id;
// }
 
// export function sortByName(a: Article, b: Article): number {
//   return a.title.localeCompare(b.title);
// }
export interface State extends EntityState<Article> {}
export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>(
  // {selectId: selectArticleId,
  // sortComparer: sortByName,} 
);

const defaultArticle = {
  ids: ['123'],
  entities: {
    '123': {
      id: '123',
      title: 'qa',
      author: 'sem',
      content: 'bla-bla-bla'
    }
  }
}

export const initialState: State = adapter.getInitialState(defaultArticle); 

const articleReducer = createReducer(
  initialState,
  on(ArticleActions.addArticle,
    (state, action) => adapter.addOne(action.article, state)
  ),
  on(ArticleActions.upsertArticle,
    (state, action) => adapter.upsertOne(action.article, state)
  ),
  on(ArticleActions.addArticles,
    (state, action) => adapter.addMany(action.articles, state)
  ),
  on(ArticleActions.upsertArticles,
    (state, action) => adapter.upsertMany(action.articles, state)
  ),
  on(ArticleActions.updateArticle,
    (state, action) => adapter.updateOne(action.article, state)
  ),
  on(ArticleActions.updateArticles,
    (state, action) => adapter.updateMany(action.articles, state)
  ),
  on(ArticleActions.deleteArticle,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ArticleActions.deleteArticles,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ArticleActions.loadArticles,
    (state, action) => adapter.addAll(action.articles, state)
  ),
  on(ArticleActions.clearArticles,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return articleReducer(state, action);
}

// export const getArticleState = 

// export const {
//   selectIds,
//   selectEntities,
//   selectAll,
//   selectTotal
// } = adapter.getSelectors(getArticleState);
 