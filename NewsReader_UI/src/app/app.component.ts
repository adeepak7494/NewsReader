import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsFeedComponent } from './features/news-feed/news-feed.component';
import { NewsService } from './core/services/news.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewsFeedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NewsReader_UI';

  constructor(private newsService : NewsService){
    this.newsService.getTopHeadlines().subscribe((res) => console.log(res));
  }


}
