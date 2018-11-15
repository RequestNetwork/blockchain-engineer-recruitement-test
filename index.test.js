const { assert } = require('chai');
const index = require('./index');

describe('index', () => {
  describe('getRequestId', () => {
    it('correctly computes the requestId', () => {
      assert.equal(index.getRequestId('0x8fc2e7f2498f1d06461ee2d547002611b801202b', 0), '0x8fc2e7f2498f1d06461ee2d547002611b801202b000000000000000000000000');
      assert.equal(index.getRequestId('0x8fc2e7f2498f1d06461ee2d547002611b801202b', 140), '0x8fc2e7f2498f1d06461ee2d547002611b801202b000000000000000000000140');
      assert.equal(index.getRequestId('0x8fc2e7f2498f1d06461ee2d547002611b801202b', 145), '0x8fc2e7f2498f1d06461ee2d547002611b801202b000000000000000000000145');
      assert.equal(index.getRequestId('0x8fc2e7f2498f1d06461ee2d547002611b801202b', 14560), '0x8fc2e7f2498f1d06461ee2d547002611b801202b000000000000000000014560');
    });
  });

  describe('getCancelRequestCount', () => {
    it('correctly get the number of canceled requests', async () => {
      const requestNetwork = index.setupRequestNetwork();
      const count = await (index.getCancelRequestCount(requestNetwork, 140, 145))
      assert.equal(count, 3);
    });
  });
});
