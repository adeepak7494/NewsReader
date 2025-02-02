import { Component } from '@angular/core';
import { ArticleDetailComponent } from "../article-detail/article-detail.component";

@Component({
  selector: 'app-news-feed',
  imports: [ArticleDetailComponent],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.css'
})
export class NewsFeedComponent {

}
