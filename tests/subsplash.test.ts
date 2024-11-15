import { expect, test } from 'vitest';
import Subsplash from '../index';
import { MediaItems } from '../lib/MediaItems';

const clientId = process.env.SUBSPLASH_CLIENT_ID;
const clientSecret = process.env.SUBSPLASH_CLIENT_SECRET;
const appKey = process.env.SUBSPLASH_SCOPE;

test('Expect env to load', () => {
  expect(clientId).toBeDefined();
  expect(clientSecret).toBeDefined();
  expect(appKey).toBeDefined();
});

test('Sub-classes have access to authentication', async () => {
  const mediaItems = new MediaItems();
  const response = await mediaItems.authenticate({
    clientId,
    clientSecret,
    appKey,
  });
  expect(mediaItems.authentication).toBeDefined();
});
