import assert from 'node:assert/strict';
import { MemoryStreamCheckpointStore, commitStreamCheckpointAfterApply } from '@x12i/memorix-client';

const store = new MemoryStreamCheckpointStore('demo-org');
const checkpoint = { method: 'cursor', cursor: 'page-2' };
await commitStreamCheckpointAfterApply(store, 'demo-connector', 'demo-instance', 'records', checkpoint, false);
assert.equal(await store.get('demo-connector', 'demo-instance', 'records'), null);
await commitStreamCheckpointAfterApply(store, 'demo-connector', 'demo-instance', 'records', checkpoint, true);
assert.equal((await store.get('demo-connector', 'demo-instance', 'records')).cursor, 'page-2');
console.log(store.readiness());
// The memory store is a test oracle. Production durability requires the supported remote checkpoint client.
