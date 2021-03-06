export interface IBaseResponse<T> {
  status: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ILoginRequestOtp {
  guid: string;
  tempId: string;
}

export interface ILoginVerifyOtp {
  token: string;
}

export interface IUser {
  id: string;
  name: string;
  mobile: string;
}

export interface IItem {
  title: string;
  tag: string;
  list: Array<{
    id: string;
    image: string;
    title: string;
    description: string;
  }>;
}

export interface IList {
  items: IItem[];
  next: string;
}

export interface IHome extends IList {
  search: string;
  special: IItem;
}

export interface ITag extends IItem {
  next: string;
}

export interface ISearch {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface IInfiniteScroll {
  runAt?: number;
  disable: boolean;
  loading: boolean;
  callback: () => void;
}

export interface IMovie {
  id: string;
  originalId?: string;
  title: string;
  descriptions: Array<{
    title: string;
    text: string;
  }>;
  cover: string;
  image: string;
  director: string;
  suggestions: IItem;
  series: Array<{
    id: string;
    title: string;
  }>;
  download: {
    subtitle: string;
    variants: Array<{
      quality: string;
      resolution: string;
      link: string;
    }>;
  };
}

export interface IDownloadRequest {
  link: string;
  id: string;
  title: string;
  quality: string;
  resolution: string;
  subtitle: string;
  image: string;
}

export interface IDownload {
  id: string;
  image: string;
  title: string;
  quality: string;
  resolution: string;
  movie: string;
  subtitle: string;
  progress: number;
  deleted?: boolean;
}
