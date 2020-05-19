/* 
This sample test shows an example of using jest to write an integrated test.
The test calls the GoodReads class which in turn calls the external api
*/
const path = require('path')
const GoodReads = require('../goodreads')
const goodReads = new GoodReads()
describe('Good Reads', () => {
    it('should return the author information when I provide the author id', async () => {
        let authorInfo = await goodReads.getAuthorInfo(3446)
        expect(authorInfo).toBeDefined();
        expect(authorInfo.authordisplay).toBe("Dan Brown")
        expect(authorInfo.authorid).toBe("3446")
    })
})
