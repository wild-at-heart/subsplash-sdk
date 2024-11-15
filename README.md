# Subsplash SDK for JavaScript

## Type-safe SDK for interacting with the Subsplash API

---

## Heads up!

This project is in early development and is and missing a ton of the features available through the Subsplash REST API. Contributions are welcome!

## Goals

**subsplash-sdk** wants to be:

- **Consistent**, offering all of the functionality available through the Subsplash API.
- **Type-safe**, providing TypeScript definitions for all of the API methods and Subsplash Objects.

## Current Subplash API Support

`media/v1`

- [x] Get Media Series
- [x] Create Media Series
- [x] Get Media Item
- [x] Create Media Item

## Getting started

You will need an API key and an App ID to use the Subsplash SDK. You can get these by signing up for a Subsplash account at [https://www.subsplash.com/](https://www.subsplash.com/) and reaching out to their support.

You will also need to get the app key of your particular app. This can be found on the Mobile App Preview page of your app in the Subsplash Dashboard. https://dashboard.subsplash.com/-d/#/channels/mobile-app/preview?setup=false

Install the package:

```bash
npm install @wildatheart/subsplash-sdk
```

Use the SDK in your project:

```typescript
import { Subsplash } from '@wildatheart/subsplash-sdk';

const subsplash = new Subsplash();
await subsplash.authenticate({
  clientId: 'your-api-key',
  clientSecret: 'your-app-id',
  appKey: 'your-subsplash-app-key',
});

const mediaItems = await subsplash.getMediaItems();

// Work with the media items
```

## Contributing

Contributions are welcome from everyone.

We have [contribution guidelines](https://github.com/wild-at-heart/subsplash-sdk/blob/master/CONTRIBUTING.md) to help you get started.

## License

Subsplash SDK is licensed under MIT.
