import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';



const routes: Routes = [
  { path: 'home', component: ArticlesListComponent},
  // { path: 'new', component: AddArticleComponent},
  // { path: 'edit', component: AddArticleComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
