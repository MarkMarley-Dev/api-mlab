export enum FetchState {
  DEFAULT = 'DEFAULT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCESS',
  ERROR = 'ERROR',
}

export enum FetchProfileState {
  DEFAULT = 'DEFAULT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCESS',
  ERROR = 'ERROR',
}

export type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type ProfileImgData = {
  images: any;
  id: number;
};
