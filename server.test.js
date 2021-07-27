import * as emp from './server.js';

let map = new Map();

describe('Check who win', () => {
    it('if everyone chooses the same', () => {
        map.set(0, 1);
        map.set(1, 1);
        map.set(2, 1);
       expect(emp.funcWhoWin(map)).toBe
    });
});