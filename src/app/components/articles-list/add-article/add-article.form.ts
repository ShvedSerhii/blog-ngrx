import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Article } from "../../../models/article.model";
/*
      ReactiveForm structure class
    */
export default class AddArticleForm {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: Article;

  constructor(model: Article) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  public createForm() {
    this.formGroup = this.formBuilder.group({
      title: new FormControl(this.model.title, {
        validators: [Validators.required],
        updateOn: "change"
      }),
      author: new FormControl(this.model.author, {
        validators: [Validators.required],
        updateOn: "change"
      }),
      content: new FormControl(this.model.content, {
        validators: [Validators.required],
        updateOn: "change"
      })
    });

    this.formGroup.valueChanges.subscribe((data: any) => {
      this.model.title = data.title;
      this.model.author = data.author;
      this.model.content = data.content;
    });
  }
}
