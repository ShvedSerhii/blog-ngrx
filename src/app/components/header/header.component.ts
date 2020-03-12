import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUrl } from 'src/app/selectors/router.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public rout$: Observable<any>;
  constructor(public store: Store<any>) {
    this.rout$ = store.select(selectUrl);
  }

  ngOnInit(): void {}
}
