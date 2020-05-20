/*
This sample test shows an example of using jest to write an integrated test.
The test calls the GoodReads class which in turn calls the external api
*/

const path = require('path');
const GoodReads = require('../goodreads');
const goodReads = new GoodReads();
const sampleAuthorInfo = require('../samples/author')

describe('Good Reads', () => {
    it('should return the author information when I provide the author id to getAuthorInfo', async () => {
        let authorInfo = await goodReads.getAuthorInfo(3446)
        expect(authorInfo).toBeDefined();
        expect(authorInfo.authordisplay).toBe("Dan Brown")
        expect(authorInfo.authorid).toBe("3446")
    });

    it('should return the book information when we pass the isbn number to getBookInformation', async () => {
        const getAuthorInfo = jest.fn();
        getAuthorInfo.mockReturnValue(sampleAuthorInfo);

        let authorInfo = await goodReads.getAuthorInfo(3446);
        let books = await goodReads.getBooks(authorInfo);
        let isbn = books[Math.floor(Math.random() * books.length)];
        let bookInformation = await goodReads.getBookInformation(isbn);

        expect(bookInformation).toBeDefined();
        expect(bookInformation).not.toBeNaN();
        expect(bookInformation.author).toBe("BROWN, DAN");
    });
})
