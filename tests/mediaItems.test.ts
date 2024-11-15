import { expect, test } from 'vitest';
import { MediaItems } from '../lib/MediaItems';

const clientId = process.env.SUBSPLASH_CLIENT_ID;
const clientSecret = process.env.SUBSPLASH_CLIENT_SECRET;
const appKey = process.env.SUBSPLASH_SCOPE;

test('Gets media items from Subsplash API', async () => {
  const mediaItems = new MediaItems();
  const response = await mediaItems.authenticate({
    clientId,
    clientSecret,
    appKey,
  });
  const item = await mediaItems.get('fb584488-004b-4beb-a041-9c7c7dc0a665');
  expect(item).toBeDefined();
});
