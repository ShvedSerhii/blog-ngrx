import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { MatDialog } from '@angular/material/dialog';
import { AddArticleComponent } from '../add-article/add-article.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() index: number;
  @Input() article: Article;

  public data: Article;

  constructor(
    public dialog: MatDialog
  ) {
    this.data = new Article();
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
        
      }
    });
  }
}
