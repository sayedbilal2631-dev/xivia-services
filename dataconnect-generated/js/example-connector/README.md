# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`example-connector/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListPublicMovies*](#listpublicmovies)
  - [*ListMyLists*](#listmylists)
- [**Mutations**](#mutations)
  - [*CreateNewMovie*](#createnewmovie)
  - [*UpdateMyReview*](#updatemyreview)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListPublicMovies
You can execute the `ListPublicMovies` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [example-connector/index.d.ts](./index.d.ts):
```typescript
listPublicMovies(): QueryPromise<ListPublicMoviesData, undefined>;

interface ListPublicMoviesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicMoviesData, undefined>;
}
export const listPublicMoviesRef: ListPublicMoviesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPublicMovies(dc: DataConnect): QueryPromise<ListPublicMoviesData, undefined>;

interface ListPublicMoviesRef {
  ...
  (dc: DataConnect): QueryRef<ListPublicMoviesData, undefined>;
}
export const listPublicMoviesRef: ListPublicMoviesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPublicMoviesRef:
```typescript
const name = listPublicMoviesRef.operationName;
console.log(name);
```

### Variables
The `ListPublicMovies` query has no variables.
### Return Type
Recall that executing the `ListPublicMovies` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPublicMoviesData`, which is defined in [example-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPublicMoviesData {
  movies: ({
    id: UUIDString;
    title: string;
    year: number;
    genres?: string[] | null;
  } & Movie_Key)[];
}
```
### Using `ListPublicMovies`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPublicMovies } from '@dataconnect/generated';


// Call the `listPublicMovies()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPublicMovies();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPublicMovies(dataConnect);

console.log(data.movies);

// Or, you can use the `Promise` API.
listPublicMovies().then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

### Using `ListPublicMovies`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPublicMoviesRef } from '@dataconnect/generated';


// Call the `listPublicMoviesRef()` function to get a reference to the query.
const ref = listPublicMoviesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPublicMoviesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movies);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

## ListMyLists
You can execute the `ListMyLists` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [example-connector/index.d.ts](./index.d.ts):
```typescript
listMyLists(): QueryPromise<ListMyListsData, undefined>;

interface ListMyListsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyListsData, undefined>;
}
export const listMyListsRef: ListMyListsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyLists(dc: DataConnect): QueryPromise<ListMyListsData, undefined>;

interface ListMyListsRef {
  ...
  (dc: DataConnect): QueryRef<ListMyListsData, undefined>;
}
export const listMyListsRef: ListMyListsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyListsRef:
```typescript
const name = listMyListsRef.operationName;
console.log(name);
```

### Variables
The `ListMyLists` query has no variables.
### Return Type
Recall that executing the `ListMyLists` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyListsData`, which is defined in [example-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyListsData {
  lists: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    isPublic: boolean;
  } & List_Key)[];
}
```
### Using `ListMyLists`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyLists } from '@dataconnect/generated';


// Call the `listMyLists()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyLists();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyLists(dataConnect);

console.log(data.lists);

// Or, you can use the `Promise` API.
listMyLists().then((response) => {
  const data = response.data;
  console.log(data.lists);
});
```

### Using `ListMyLists`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyListsRef } from '@dataconnect/generated';


// Call the `listMyListsRef()` function to get a reference to the query.
const ref = listMyListsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyListsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.lists);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.lists);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewMovie
You can execute the `CreateNewMovie` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [example-connector/index.d.ts](./index.d.ts):
```typescript
createNewMovie(): MutationPromise<CreateNewMovieData, undefined>;

interface CreateNewMovieRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateNewMovieData, undefined>;
}
export const createNewMovieRef: CreateNewMovieRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewMovie(dc: DataConnect): MutationPromise<CreateNewMovieData, undefined>;

interface CreateNewMovieRef {
  ...
  (dc: DataConnect): MutationRef<CreateNewMovieData, undefined>;
}
export const createNewMovieRef: CreateNewMovieRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewMovieRef:
```typescript
const name = createNewMovieRef.operationName;
console.log(name);
```

### Variables
The `CreateNewMovie` mutation has no variables.
### Return Type
Recall that executing the `CreateNewMovie` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewMovieData`, which is defined in [example-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewMovieData {
  movie_insert: Movie_Key;
}
```
### Using `CreateNewMovie`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewMovie } from '@dataconnect/generated';


// Call the `createNewMovie()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewMovie();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewMovie(dataConnect);

console.log(data.movie_insert);

// Or, you can use the `Promise` API.
createNewMovie().then((response) => {
  const data = response.data;
  console.log(data.movie_insert);
});
```

### Using `CreateNewMovie`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewMovieRef } from '@dataconnect/generated';


// Call the `createNewMovieRef()` function to get a reference to the mutation.
const ref = createNewMovieRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewMovieRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.movie_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.movie_insert);
});
```

## UpdateMyReview
You can execute the `UpdateMyReview` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [example-connector/index.d.ts](./index.d.ts):
```typescript
updateMyReview(vars: UpdateMyReviewVariables): MutationPromise<UpdateMyReviewData, UpdateMyReviewVariables>;

interface UpdateMyReviewRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMyReviewVariables): MutationRef<UpdateMyReviewData, UpdateMyReviewVariables>;
}
export const updateMyReviewRef: UpdateMyReviewRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateMyReview(dc: DataConnect, vars: UpdateMyReviewVariables): MutationPromise<UpdateMyReviewData, UpdateMyReviewVariables>;

interface UpdateMyReviewRef {
  ...
  (dc: DataConnect, vars: UpdateMyReviewVariables): MutationRef<UpdateMyReviewData, UpdateMyReviewVariables>;
}
export const updateMyReviewRef: UpdateMyReviewRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateMyReviewRef:
```typescript
const name = updateMyReviewRef.operationName;
console.log(name);
```

### Variables
The `UpdateMyReview` mutation requires an argument of type `UpdateMyReviewVariables`, which is defined in [example-connector/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateMyReviewVariables {
  reviewId: UUIDString;
  reviewText?: string | null;
}
```
### Return Type
Recall that executing the `UpdateMyReview` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateMyReviewData`, which is defined in [example-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateMyReviewData {
  review_update?: Review_Key | null;
}
```
### Using `UpdateMyReview`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateMyReview, UpdateMyReviewVariables } from '@dataconnect/generated';

// The `UpdateMyReview` mutation requires an argument of type `UpdateMyReviewVariables`:
const updateMyReviewVars: UpdateMyReviewVariables = {
  reviewId: ..., 
  reviewText: ..., // optional
};

// Call the `updateMyReview()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateMyReview(updateMyReviewVars);
// Variables can be defined inline as well.
const { data } = await updateMyReview({ reviewId: ..., reviewText: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateMyReview(dataConnect, updateMyReviewVars);

console.log(data.review_update);

// Or, you can use the `Promise` API.
updateMyReview(updateMyReviewVars).then((response) => {
  const data = response.data;
  console.log(data.review_update);
});
```

### Using `UpdateMyReview`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateMyReviewRef, UpdateMyReviewVariables } from '@dataconnect/generated';

// The `UpdateMyReview` mutation requires an argument of type `UpdateMyReviewVariables`:
const updateMyReviewVars: UpdateMyReviewVariables = {
  reviewId: ..., 
  reviewText: ..., // optional
};

// Call the `updateMyReviewRef()` function to get a reference to the mutation.
const ref = updateMyReviewRef(updateMyReviewVars);
// Variables can be defined inline as well.
const ref = updateMyReviewRef({ reviewId: ..., reviewText: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateMyReviewRef(dataConnect, updateMyReviewVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.review_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.review_update);
});
```

