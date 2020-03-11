import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './article.reducer';
import * as fromArticle from './article.reducer';

export const selectArticlesState = createFeatureSelector<State>("articles");



export const selectArticleById = (articleId:number) => createSelector(
  selectArticlesState,
  articlesState => articlesState.entities[articleId]
);


export const selectAllArticles = createSelector(
  selectArticlesState,
  fromArticle.selectAllArticles
);

// export const selectBeginnerCourses = createSelector(
//     selectAllCourses,
//     courses => courses.filter(course => course.category === 'BEGINNER')
// );


// export const selectAdvancedCourses = createSelector(
//     selectAllCourses,
//     courses => courses.filter(course => course.category === 'ADVANCED')
// );

// export const selectPromoTotal = createSelector(
//   selectAllCourses,
//     courses => courses.filter(course => course.promo).length
// );


// export const allCoursesLoaded = createSelector(
//   selectArticlesState,
//   coursesState => coursesState.allCoursesLoaded
// );
