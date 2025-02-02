import { Article } from './article';

export interface NewsItems  {
  status: string;
  totalResults: number;
  articles: Article[];
}
