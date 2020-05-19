const path = require('path')
const GoodReads = require('../goodreads')
const sampleResponse = require('../samples/author.json')
const goodReads = new GoodReads();
describe('Good Reads', () => {
    it('should return the author info when i provide the author id', async () => {
        const getAuthorInfo = jest.fn()
        getAuthorInfo.mockReturnValue(sampleResponse)

        let authorInfo = await goodReads.getAuthorInfo(3446)
        expect(authorInfo).toBeDefined();
        expect(authorInfo.authordisplay).toBe("Dan Brown")
        expect(authorInfo.authorid).toBe("3446")
    })
})