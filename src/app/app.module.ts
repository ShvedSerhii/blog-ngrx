import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleComponent } from './components/articles-list/article/article.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddArticleComponent } from './components/articles-list/add-article/add-article.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { entityConfig } from './services/entity-metadata';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticleComponent,
    AddArticleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddArticleComponent]
})
export class AppModule {}
