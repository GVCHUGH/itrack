import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shoudlShowHeader: boolean = true;
  currentRoute: string | undefined;
  title = 'itrack';
  constructor(private router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (event.url.endsWith('login')) this.shoudlShowHeader = false;
          else this.shoudlShowHeader = true;
        }
      });
  }
}


