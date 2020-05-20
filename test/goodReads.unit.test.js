

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
    });

    it('should return an array of books when I pass the author information to getBooks', async () => {
        const getAuthorInfo = jest.fn();
        getAuthorInfo.mockReturnValue(sampleResponse);

        let authorInfo = await goodReads.getAuthorInfo(3446);
        let books = await goodReads.getBooks(authorInfo);

        expect(books).toBeDefined();
        expect(books).toBeInstanceOf(Array);
    });

    it('should return the array of work ids when I pass the authorInfo to getWorks', async () => {
        const getAuthorInfo = jest.fn();
        getAuthorInfo.mockReturnValue(sampleResponse);

        let authorInfo = await goodReads.getAuthorInfo(3446);
        let works = await goodReads.getWorks(authorInfo);
        expect(works).toBeDefined();
        expect(works).toBeInstanceOf(Array);
    });
});
