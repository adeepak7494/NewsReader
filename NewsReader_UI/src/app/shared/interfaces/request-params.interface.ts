export interface HeadlinesRequestParams {
  country?: string;
  category?: string;
  sources?: string;
  q?: string;
  page?: number;
  pageSize?: number;
}

export interface EverythingRequestParams {
  q?: string;
  searchIn?: 'title' | 'description' | 'content';
  sources?: string;
  domains?: string;
  excludeDomains?: string;
  from?: Date;
  to?: Date;
  language?: string;
  sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
  page?: number;
  pageSize?: number;
}
