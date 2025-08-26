import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'services',
  location: 'us-central1'
};

export const createNewMovieRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewMovie');
}
createNewMovieRef.operationName = 'CreateNewMovie';

export function createNewMovie(dc) {
  return executeMutation(createNewMovieRef(dc));
}

export const listPublicMoviesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicMovies');
}
listPublicMoviesRef.operationName = 'ListPublicMovies';

export function listPublicMovies(dc) {
  return executeQuery(listPublicMoviesRef(dc));
}

export const updateMyReviewRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateMyReview', inputVars);
}
updateMyReviewRef.operationName = 'UpdateMyReview';

export function updateMyReview(dcOrVars, vars) {
  return executeMutation(updateMyReviewRef(dcOrVars, vars));
}

export const listMyListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMyLists');
}
listMyListsRef.operationName = 'ListMyLists';

export function listMyLists(dc) {
  return executeQuery(listMyListsRef(dc));
}

