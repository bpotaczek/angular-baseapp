# Adding @ngrx to your project 

- [Adding @ngrx to your project](#adding-ngrx-to-your-project)
  - [npm](#npm)
  - [core.module](#coremodule)
    - [/core/store](#corestore)
    - [/core/store/actions](#corestoreactions)
    - [/core/store/effects](#corestoreeffects)
    - [/core/store/reducers](#corestorereducers)
    - [/core/store/selectors](#corestoreselectors)
    - [/core/store/index.ts](#corestoreindexts)
    - [/core/core.module.ts](#corecoremodulets)
  - [feature.module](#featuremodule)
    - [/user/store](#userstore)
    - [/user/store/actions](#userstoreactions)
    - [/user/store/effects](#userstoreeffects)
    - [/user/store/reducers](#userstorereducers)
    - [/user/store/selectors](#userstoreselectors)
    - [/user/store/index.ts](#userstoreindexts)
    - [/user/user.module.ts](#userusermodulets)

## npm

In your console (in your web project directory), run the following command. This will add the dependencies to your `package.json`.

```
npm install @ngrx/core @ngrx/store @ngrx/effects --save
```

## core.module

### /core/store

First create the `store` folders needed under your core module. Here is an example of what your structure might look like.

```typescript
/src
+-- app
|   +-- core
|   |   +-- components
|   |        // core components go here
|   |   +-- services
|   |        // core services go here
|   |   +-- store
|   |   |   +-- actions
|   |   |   |   +-- index.ts
|   |   |   |   +-- menu.actions.ts
|   |   | 
|   |   |   +-- effects
|   |   |   |   +-- index.ts
|   |   |   |   +-- menu.effects.ts
|   |   |
|   |   |   +-- reducers
|   |   |   |   +-- index.ts
|   |   |   |   +-- menu.reducer.ts
|   |   |
|   |   |   +-- selectors
|   |   |   |   +-- index.ts
|   |   |   |   +-- menu.selector.ts
|   |   |
|   |   +-- core.module.ts
|   |
|   +-- app.component.html
|   +-- app.component.scss
|   +-- app.component.ts
|   +-- app.module.ts
|   +-- app.routing.module.ts
```
### /core/store/actions

If you have no actions yet then you can leave the `index.ts` file blank. If you do have actions, all actions should be exported here.

```typescript
export * from './menu.actions';
```

### /core/store/effects

If you have no effects yet you should still export empty effects so we can import it later.

```typescript
export const effects: any[] = [];
```

If you have any effects and as you create effects add them to the array.
```typescript
import { MenuEffects } from './menu.effects';

export const effects: any[] = [
     MenuEffects
];
```
_Take note of the export. It is a variable called `effects`. We will use that later._

### /core/store/reducers

Same as effects, if you do not have a reducer we will create an empty state so we can add to it later. (note: we will disable the tslint rule to allow for an empty interface)

```typescript
import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

// tslint:disable-next-line:no-empty-interface
export interface CoreState { }

export const reducers: ActionReducerMap<CoreState> = {};

export function logger(reducer: ActionReducer<CoreState>): ActionReducer<CoreState> {
        return function(state: CoreState, action: any): CoreState {
          console.log('state', state);
          console.log('action', action);
          return reducer(state, action);
        };
      }

export const metaReducers: MetaReducer<CoreState>[] = !environment.production ? [logger] : [];
``` 

If you have a reducer already you can add it to the `CoreState`.
```typescript

import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

import { MenuState, menuReducer } from './menu.reducer';

export interface CoreState {
    menu: MenuState;
}

export const reducers: ActionReducerMap<CoreState> = {
    menu: menuReducer,
};

export function logger(reducer: ActionReducer<CoreState>): ActionReducer<CoreState> {
        return function(state: CoreState, action: any): CoreState {
          console.log('state', state);
          console.log('action', action);
          return reducer(state, action);
        };
      }

export const metaReducers: MetaReducer<CoreState>[] = !environment.production ? [logger] : [];
```
_Take note of the export. They are variables called `reducers` and `metaReducers`. We will use them later._

### /core/store/selectors

If you have no selectors yet then you can leave the `index.ts` file blank. If you do have selectors, all selectors should be exported here.

```typescript
export * from './menu.selectors';
```

### /core/store/index.ts

We have one more `index.ts` file and that is at the root /store folder. It should export all the code we have above.

```typescript
export * from './actions';
export * from './effects';
export * from './reducers';
export * from './selectors';
```

### /core/core.module.ts

We need to add a couple lines into our module to get the store wired up properly.

First we need to import the variables we exported earlier.

```typescript
import { reducers, metaReducers, effects } from './store';
```

Then import the `@ngrx/store` modules.

```typescript
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
```

Finally we need to import the NgModules into our Core NgModule.

```typescript
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    
    // These two lines
    StoreModule.forRoot(reducers, { metaReducers: metaReducers }),
    EffectsModule.forRoot(effects),

    KbxlCoreModule.forRoot(environment)
  ],
  declarations: [...],
  providers: [...],
  ...
})
```

## feature.module

For this example, lets assume our feature is named `User`.

### /user/store

First create the `store` folders needed under your user module like we did with Core. Here is an example of what your structure might look like.

```typescript
/src
+-- app
|   +-- user
|   |   +-- components
|   |        // user components go here
|   |   +-- services
|   |        // user services go here
|   |   +-- store
|   |   |   +-- actions
|   |   |   |   +-- index.ts
|   |   |   |   +-- user-search.actions.ts
|   |   | 
|   |   |   +-- effects
|   |   |   |   +-- index.ts
|   |   |   |   +-- user-search.effects.ts
|   |   |
|   |   |   +-- reducers
|   |   |   |   +-- index.ts
|   |   |   |   +-- user-search.reducer.ts
|   |   |
|   |   |   +-- selectors
|   |   |   |   +-- index.ts
|   |   |   |   +-- user-search.selector.ts
|   |   |
|   |   +-- user.module.ts
```
### /user/store/actions

If you have no actions yet then you can leave the `index.ts` file blank. If you do have actions, all actions should be exported here.

```typescript
export * from './user-search.actions';
```

### /user/store/effects

If you have no effects yet you should still export empty effects so we can import it later.

```typescript
export const effects: any[] = [];
```

If you have any effects and as you create effects add them to the array.
```typescript
import { UserSearchEffects } from './user-search.effects';
import { UserEffects } from './user.effects';

export const effects: any[] = [
     UserSearchEffects,
     UserEffects
];
```
_Take note of the export. It is a variable called `effects`. We will use that later._

### /user/store/reducers

Same as effects, if you do not have a reducer we will create an empty state so we can add to it later. (note: we will disable the tslint rule to allow for an empty interface)

```typescript
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

// tslint:disable-next-line:no-empty-interface
export interface UserFeatureState {}

export const reducers: ActionReducerMap<UserFeatureState> = {};

export const getUserFeatureState = createFeatureSelector<UserFeatureState>('user');

``` 

If you have a reducer(s) already you can add it to the `UserState`.
```typescript
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { UserSearchState, UserSearchReducer } from './user-search.reducer';
import { UserState, UserReducer } from './user.reducer';

export interface UserFeatureState {
    userSearch: UserSearchState;
    user: UserState;
}

export const reducers: ActionReducerMap<UserFeatureState> = {
    userSearch: UserSearchReducer,
    user: UserReducer
};

export const getUserFeatureState = createFeatureSelector<UserFeatureState>('user');
```
_Take note of the export. There is a variable called `reducers`. We will use it later._

### /user/store/selectors

If you have no selectors yet then you can leave the `index.ts` file blank. If you do have selectors, all selectors should be exported here.

```typescript
export * from './user.selectors';
export * from './user-search.selectors';
```

### /user/store/index.ts

We have one more `index.ts` file and that is at the root /store folder. It should export all the code we have above.

```typescript
export * from './actions';
export * from './effects';
export * from './reducers';
export * from './selectors';
```

### /user/user.module.ts

We need to add a couple lines into our module to get the store wired up properly.

First we need to import the variables we exported earlier.

```typescript
import { effects, reducers } from './store';
```

Then import the `@ngrx/store` modules.

```typescript
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
```

Finally we need to import the NgModules into our User NgModule.

```typescript
@NgModule({
  imports: [
    UserRouterModule,
    SharedModule,
    
    // These two lines
    EffectsModule.forFeature(effects),
    StoreModule.forFeature('user', reducers)
  ],
  declarations: [...],
  providers: [...]
})
```