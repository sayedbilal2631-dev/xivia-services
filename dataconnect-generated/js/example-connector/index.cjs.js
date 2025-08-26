const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'services',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const createNewMovieRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewMovie');
}
createNewMovieRef.operationName = 'CreateNewMovie';
exports.createNewMovieRef = createNewMovieRef;

exports.createNewMovie = function createNewMovie(dc) {
  return executeMutation(createNewMovieRef(dc));
};

const listPublicMoviesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicMovies');
}
listPublicMoviesRef.operationName = 'ListPublicMovies';
exports.listPublicMoviesRef = listPublicMoviesRef;

exports.listPublicMovies = function listPublicMovies(dc) {
  return executeQuery(listPublicMoviesRef(dc));
};

const updateMyReviewRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateMyReview', inputVars);
}
updateMyReviewRef.operationName = 'UpdateMyReview';
exports.updateMyReviewRef = updateMyReviewRef;

exports.updateMyReview = function updateMyReview(dcOrVars, vars) {
  return executeMutation(updateMyReviewRef(dcOrVars, vars));
};

const listMyListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMyLists');
}
listMyListsRef.operationName = 'ListMyLists';
exports.listMyListsRef = listMyListsRef;

exports.listMyLists = function listMyLists(dc) {
  return executeQuery(listMyListsRef(dc));
};
