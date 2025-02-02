import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { catchError, from, map, Observable, share } from "rxjs";
import { appConfig } from "../../app.config";
import { NewsApiRequestBuilder } from "./news-api-request-builder";
import { Article, NewsItems } from "../../shared/models";

@Injectable({providedIn: 'root'})
export class NewsService {
  errorArticles: Article[] = [{
    source:
    {
      id: '401',
      name: 'error'
    },
    author: 'app',
    title: 'Get Your Own Api Ket from NewsAPI Website',
    description: 'Get your own key',
    url: 'https://newsapi.org/docs/get-started',
    urlToImage: 'assets/newsapilogo.png',
    publishedAt: Date.now().toString(),
    content: 'Get Your Own Api Ket from newsapi.org, and configure environment variable  - apiKey: \'<get_your_own_key>\' in the project '
  }];

  constructor(private http: HttpClient,
    @Inject('API_URL') private apiUrl: string,
    @Inject('API_KEY') private apiKey: string
  ) {}


  getTopHeadlines(country = 'us', source = '', category = '', query = '', language = 'en'): Observable<Article[]> {
    if ((source && source.trim()) || (category && category.trim()))
      country = '';
    const request = new NewsApiRequestBuilder(this.apiUrl,this.apiKey)
    .topHeadlines()
    .fromCountry(country)
    .fromSource(source)
    .inCategory(category)
    .withQuery(query)
    .inLanguage(language)
    .build();

    return this.callNewsApi(request.url, request.params, request.headers);

  }

  callNewsApi(url: string, params: HttpParams,headers: HttpHeaders): Observable<Article[]> {
    return this.http
      .get<NewsItems>(url, { params , headers})
      .pipe(
        map((res) => res.articles),
        map((articles: Article[]) =>
          articles.filter((p) => {
            const hasContent = p.content && p.content.trim() != '';
            const hasImage = p.urlToImage && p.urlToImage.trim() != '';
            return hasContent && hasImage;
          })
        ),
        catchError((err) => {
          console.log(err);
          return from([this.errorArticles]);
        }),
        share()
      );
  }
}
