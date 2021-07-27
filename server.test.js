import * as emp from './server.js';

let map = new Map([
    {0: 1},
    {1: 3},
]);

describe('Check who win', () => {
    it('if everyone chooses the same', () => {
        map.set(0, 1)
    });
});