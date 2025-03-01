import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsFeedComponent } from './features/news-feed/news-feed.component';
import { NewsService } from './core/services/news.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SidebarComponent } from "./features/sidebar/sidebar.component";
import { HeaderComponent } from "./features/header/header.component";


@Component({
  selector: 'app-root',
  imports: [NewsFeedComponent,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatCardModule, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NewsReader_UI';

  constructor(private newsService : NewsService){
    this.newsService.getTopHeadlines().subscribe((res) => console.log(res));
  }


}
