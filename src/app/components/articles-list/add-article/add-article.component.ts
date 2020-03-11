import { Component, Inject } from '@angular/core';
import AddArticleForm from './add-article.form';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent {
  public form: AddArticleForm;
  constructor(
    public dialogRef: MatDialogRef<AddArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Article
  ) {
    this.form = new AddArticleForm(data);
  }

  cancel(): void { 
    this.dialogRef.close();
  }
}
