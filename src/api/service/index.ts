/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

/** Generate by swagger-axios-codegen */
/* eslint-disable */
// @ts-nocheck
import axiosStatic, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IRequestOptions extends AxiosRequestConfig {}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class TagsService {
  /**
   * Get tag information
   */
  static tags(
    params: {
      /** bitcoin, etc. */
      tag: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<TagResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tags/{tag}';
      url = url.replace('{tag}', params['tag'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class CategoriesService {
  /**
   * Get all categories and subcategories
   */
  static categories(options: IRequestOptions = {}): Promise<CategoriesResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/categories';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class FeedsService {
  /**
   * Get a list of articles
   */
  static feeds(
    params: {
      /**  */
      offset?: string;
      /**  */
      limit?: string;
      /** For example. GET /feeds?tag=altcoin */
      tag?: string;
      /** For example. GET /feeds?publisher=cryptoslate.com */
      publisher?: string;
      /** For example. GET /feeds?category=ethereum */
      category?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FeedsResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/feeds';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        offset: params['offset'],
        limit: params['limit'],
        tag: params['tag'],
        publisher: params['publisher'],
        category: params['category']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a list of live articles
   */
  static live(
    params: {
      /**  */
      offset?: string;
      /**  */
      limit?: string;
      /** For example. GET /live?tag=altcoin */
      tag?: string;
      /** For example. GET /live?publisher=cryptoslate.com */
      publisher?: string;
      /** For example. GET /live?category=ethereum */
      category?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FeedsResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/live';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        offset: params['offset'],
        limit: params['limit'],
        tag: params['tag'],
        publisher: params['publisher'],
        category: params['category']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a list of article for the user. Including isBookmarked flag, etc.
   */
  static userFeeds(
    params: {
      /**  */
      offset?: string;
      /**  */
      limit?: string;
      /** For example. GET /feeds?tag=altcoin */
      tag?: string;
      /** For example. GET /feeds?publisher=cryptoslate.com */
      publisher?: string;
      /** For example. GET /feeds?category=ethereum */
      category?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserFeedsResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user-feeds';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        offset: params['offset'],
        limit: params['limit'],
        tag: params['tag'],
        publisher: params['publisher'],
        category: params['category']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get an article with content body
   */
  static feeds1(
    params: {
      /** Every article has RSS Feed ID */
      rssFeedId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FeedByIdResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/feeds/{rss_feed_id}';
      url = url.replace('{rss_feed_id}', params['rssFeedId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get an article by slug with content body
   */
  static feedBySlug(
    params: {
      /** the article slug. For example, GET /feed-by-slug?slug=whats-behind-dydxs-explosive-growth-and-skyrocketing-revenue */
      slug: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FeedByIdResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/feed-by-slug';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { slug: params['slug'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class BookmarksService {
  /**
   * Get a list of bookmarked articles
   */
  static bookmarks(
    params: {
      /**  */
      offset?: string;
      /**  */
      limit?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BookmarksResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/bookmarks';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { offset: params['offset'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Bookmark an article
   */
  static bookmarks1(
    params: {
      /** RSS Feed Id should be in HTTP Request Body */
      body: HttpRequestBodyBookmarks;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SuccessResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/bookmarks';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Unbookmark an article
   */
  static bookmarks2(
    params: {
      /** Every news has RSS Feed ID */
      rssFeedId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SuccessResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/bookmarks/{rss_feed_id}';
      url = url.replace('{rss_feed_id}', params['rssFeedId'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class PublishersService {
  /**
   * Get a publisher info by publisher name
   */
  static publishers(
    params: {
      /** For example, GET /publishers?url=benzinga.com/markets/cryptocurrency */
      url: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PublisherResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/publishers';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { url: params['url'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get a publisher info by publisher name
   */
  static publishers1(
    params: {
      /** For example, GET /publishers/45 */
      publisherId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PublisherResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/publishers/{publisher_id}';
      url = url.replace('{publisher_id}', params['publisherId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Follow a publisher
   */
  static follow(
    params: {
      /** The publisher ID */
      publisherId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SuccessResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/publishers/{publisher_id}/follow';
      url = url.replace('{publisher_id}', params['publisherId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Unfollow a publisher
   */
  static follow1(
    params: {
      /** The publisher ID */
      publisherId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SuccessResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/publishers/{publisher_id}/follow';
      url = url.replace('{publisher_id}', params['publisherId'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class MarketingService {
  /**
   * Send email address to SendGrid for marketing purposes
   */
  static collect(
    params: {
      /** email in HTTP Request Body */
      email: SendGridBodyRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SuccessResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/emails/collect';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['email'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class UsersService {
  /**
   * Doesn't add users but instead verifies the user's JWT against firebase Auth
   */
  static user(options: IRequestOptions = {}): Promise<AddUserSuccessResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export interface Article {
  /**  */
  id?: number;

  /**  */
  title?: string;

  /**  */
  link?: string;

  /**  */
  image?: string;

  /**  */
  description?: string;

  /**  */
  published?: string;

  /**  */
  published_epoch?: number;

  /**  */
  tags?: string[];

  /**  */
  category?: string[];

  /**  */
  sub_category?: string[];

  /**  */
  slug?: string;

  /**  */
  publisher?: string;

  /**  */
  publisher_name?: string;

  /**  */
  publisher_description?: string;

  /**  */
  publisher_logo?: string;

  /**  */
  allow_iframe?: boolean;

  /**  */
  summary?: string;

  /**  */
  share_url?: string;
}

export interface ArticleBody {
  /**  */
  order?: number;

  /**  */
  view_type?: string;

  /**  */
  content?: string;
}

export interface UserArticle {}

export interface FeedByIdResponse {}

export interface FeedsResponse {
  /**  */
  has_next_page?: boolean;

  /**  */
  hits?: number;

  /**  */
  limit?: number;

  /**  */
  offset?: number;

  /**  */
  main_banners?: Article[];

  /**  */
  featured_banners?: Article[];

  /**  */
  regular_listing?: Article[];
}

export interface BookmarksResponse {
  /**  */
  bookmarks?: Article[];

  /**  */
  status?: string;
}

export interface UserFeedsResponse {
  /**  */
  main_banners?: UserArticle[];

  /**  */
  featured_banners?: UserArticle[];

  /**  */
  regular_listing?: UserArticle[];

  /**  */
  has_next_page?: boolean;
}

export interface TagResponse {
  /**  */
  name?: string;

  /**  */
  description?: string;
}

export interface PublisherResponse {
  /**  */
  id?: number;

  /**  */
  rss_url?: string;

  /**  */
  publisher?: string;

  /**  */
  publisher_name?: string;

  /**  */
  description?: string;

  /**  */
  publisher_logo?: string;

  /**  */
  allow_iframe?: boolean;

  /**  */
  is_active?: boolean;

  /**  */
  is_followed?: boolean;
}

export interface SuccessResponse {
  /**  */
  status?: string;
}

export interface AddUserSuccessResponse {
  /**  */
  status?: string;

  /**  */
  uuid?: string;
}

export interface Error401Response {
  /**  */
  error?: string;
}

export interface ErrorResponse {
  /**  */
  status?: string;

  /**  */
  message?: string;
}

export interface HttpRequestBodyBookmarks {
  /**  */
  rss_feed_id?: string;
}

export interface SendGridBodyRequest {
  /**  */
  email?: string;
}
