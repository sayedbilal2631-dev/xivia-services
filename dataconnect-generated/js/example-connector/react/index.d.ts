import { CreateNewMovieData, ListPublicMoviesData, UpdateMyReviewData, UpdateMyReviewVariables, ListMyListsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateNewMovie(options?: useDataConnectMutationOptions<CreateNewMovieData, FirebaseError, void>): UseDataConnectMutationResult<CreateNewMovieData, undefined>;
export function useCreateNewMovie(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewMovieData, FirebaseError, void>): UseDataConnectMutationResult<CreateNewMovieData, undefined>;

export function useListPublicMovies(options?: useDataConnectQueryOptions<ListPublicMoviesData>): UseDataConnectQueryResult<ListPublicMoviesData, undefined>;
export function useListPublicMovies(dc: DataConnect, options?: useDataConnectQueryOptions<ListPublicMoviesData>): UseDataConnectQueryResult<ListPublicMoviesData, undefined>;

export function useUpdateMyReview(options?: useDataConnectMutationOptions<UpdateMyReviewData, FirebaseError, UpdateMyReviewVariables>): UseDataConnectMutationResult<UpdateMyReviewData, UpdateMyReviewVariables>;
export function useUpdateMyReview(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateMyReviewData, FirebaseError, UpdateMyReviewVariables>): UseDataConnectMutationResult<UpdateMyReviewData, UpdateMyReviewVariables>;

export function useListMyLists(options?: useDataConnectQueryOptions<ListMyListsData>): UseDataConnectQueryResult<ListMyListsData, undefined>;
export function useListMyLists(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyListsData>): UseDataConnectQueryResult<ListMyListsData, undefined>;
