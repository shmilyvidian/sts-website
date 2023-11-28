export type Locale = 'en-US' | 'zh-CN';

export type LocaleDirection = 'ltr' | 'rtl';

export interface ApiData {
  featured: Article;
  feed: Article[];
}

export interface ArticleTranslation {
  title: string;
  body: string;
}

export type ArticleTranslations = Record<Locale, ArticleTranslation>;

export interface Article {
  id: string;
  author: string;
  publishedAt: string;
  imgUrl?: string;
  sourceUrl: string;
  translations: ArticleTranslations;
}

export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
};

export type Testimonial = {
  id: number;
  name: string;
  designation: string;
  content: string;
  image: string;
  star: number;
};

type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};
