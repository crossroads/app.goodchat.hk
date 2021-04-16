# GoodChat App

GoodChat is an omni-channel chat solution that enables users to donate to us using their channel of choice (e.g. WhatsApp, Telegram, Messenger, LINE, etc.).

This repository is for GoodChat App which is a hybrid app that provides a user interface that allows our staff to communicate with donors as well as generate structured transactions out of these interactions in order to integrate with our existing systems.

## Getting started

### Installation

Install dependencies using

```
npm install
```

### Running the application

```
npm run dev
```

This will start the react app as well as run graphQL code generator in the background which will watch for any code changes in `.graphql` files.

## Development Guidelines

### GraphQL Development

Refer to the best practices written here https://the-guild.dev/blog/graphql-codegen-best-practices

Write all your queries in `.graphql` files. Then wait for graphql code generator (which should be running in the background and watching for changes) to generate types and documents for you.
For example if you have a `myOffers.graphql` file like so

```
query myOffers {
  offers {
    id
    company_id
  }
}
```

The code generator would then generate a whole bunch of types, but most importantly it generates documents and hooks which we can import e.g.

```
export const MyOffersDocument = gql`
    query myOffers {
  offers {
    id
    company_id
  }
}
    `;
```

This is an example of a generated document. According to [GraphQL Codegen Best Practices](https://the-guild.dev/blog/graphql-codegen-best-practices)

> You can manage your GraphQL operations in .graphql files, without worrying about loading it into your application with Webpack loaders ...
> ...automatically creates an executable copy (DocumentNode) of your GraphQL operations in the generated code file, and it will automatically include it within your wrapper call.

You can import it and use it in your project like so

```
import { MyOffersDocument } from "generated/graphql";
```

You could also just directly use the generated hooks.
Thus instead of doing

```
const {data} = useQuery<MyOffersQuery>(MyOffersDocument)
```

you could do

```
const {data} = useMyOffersQuery()
```

### Code formatting

This project uses [Prettier](https://prettier.io) for code formatting.
You can either

1. download the editor extension for it and configure it to format on save or
2. run the command below which formats all files except for the ones specified in `.gitignore`

```
npm run format
```

### Testing

**Test isolation**

It is important to keep tests isolated and prevent them affecting other tests. We should be able to run tests in any order and they should still pass.

To prevent tests that write to localStorage from affecting other tests (and hence leading to non-isolated tests), there is a `localStorage.clear()` inside `setupTests.ts` that cleans up after every test.
You can put any other cleanup or setup logic here to maintain test isolation.

#### Integration Tests
Do not render `App` directly. As mentioned in the wiki entry on [Testing Routing](https://github.com/crossroads/app.goodchat.hk/wiki/Testing-Routing), `IonReactRouter` when used together with `IonRouterOutlet` behaves strangely in the test environment. Therefore, you should instead do something like this
```
const { container } = render(
  <IonApp>
    <AuthProvider>
      <Router history={history}>
        <MainRouter />
      </Router>
    </AuthProvider>
  </IonApp>
);
```
You could create an abstraction for this if you like, but the main point is that we use `Router` instead of `IonReactRouter` in tests.

## Wiki

[GoodChat App Wiki](https://github.com/crossroads/app.goodchat.hk/wiki)

## Built With

[Ionic React](https://ionicframework.com/docs/react)
