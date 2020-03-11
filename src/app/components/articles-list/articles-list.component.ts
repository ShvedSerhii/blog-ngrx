import { Component } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { MatDialog } from '@angular/material/dialog';
import { AddArticleComponent } from './add-article/add-article.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent {
  public articles$: Observable<Article[]>;

  constructor(
    public dialog: MatDialog, private store: ArticleService
  ) {
    this.articles$ = store.entities$;
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AddArticleComponent, {
      width: '600px',
      data: new Article()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      if (result.title && result.author && result.content) {
        result.id = new Date().getUTCMilliseconds();
        this.store.addOneToCache(result);
      } 
    });
  }
}
