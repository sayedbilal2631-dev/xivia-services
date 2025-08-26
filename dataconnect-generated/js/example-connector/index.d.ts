import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateNewMovieData {
  movie_insert: Movie_Key;
}

export interface ListMovie_Key {
  id: UUIDString;
  __typename?: 'ListMovie_Key';
}

export interface ListMyListsData {
  lists: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    isPublic: boolean;
  } & List_Key)[];
}

export interface ListPublicMoviesData {
  movies: ({
    id: UUIDString;
    title: string;
    year: number;
    genres?: string[] | null;
  } & Movie_Key)[];
}

export interface List_Key {
  id: UUIDString;
  __typename?: 'List_Key';
}

export interface Movie_Key {
  id: UUIDString;
  __typename?: 'Movie_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface UpdateMyReviewData {
  review_update?: Review_Key | null;
}

export interface UpdateMyReviewVariables {
  reviewId: UUIDString;
  reviewText?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface Watch_Key {
  id: UUIDString;
  __typename?: 'Watch_Key';
}

interface CreateNewMovieRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateNewMovieData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateNewMovieData, undefined>;
  operationName: string;
}
export const createNewMovieRef: CreateNewMovieRef;

export function createNewMovie(): MutationPromise<CreateNewMovieData, undefined>;
export function createNewMovie(dc: DataConnect): MutationPromise<CreateNewMovieData, undefined>;

interface ListPublicMoviesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicMoviesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPublicMoviesData, undefined>;
  operationName: string;
}
export const listPublicMoviesRef: ListPublicMoviesRef;

export function listPublicMovies(): QueryPromise<ListPublicMoviesData, undefined>;
export function listPublicMovies(dc: DataConnect): QueryPromise<ListPublicMoviesData, undefined>;

interface UpdateMyReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMyReviewVariables): MutationRef<UpdateMyReviewData, UpdateMyReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateMyReviewVariables): MutationRef<UpdateMyReviewData, UpdateMyReviewVariables>;
  operationName: string;
}
export const updateMyReviewRef: UpdateMyReviewRef;

export function updateMyReview(vars: UpdateMyReviewVariables): MutationPromise<UpdateMyReviewData, UpdateMyReviewVariables>;
export function updateMyReview(dc: DataConnect, vars: UpdateMyReviewVariables): MutationPromise<UpdateMyReviewData, UpdateMyReviewVariables>;

interface ListMyListsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyListsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyListsData, undefined>;
  operationName: string;
}
export const listMyListsRef: ListMyListsRef;

export function listMyLists(): QueryPromise<ListMyListsData, undefined>;
export function listMyLists(dc: DataConnect): QueryPromise<ListMyListsData, undefined>;

