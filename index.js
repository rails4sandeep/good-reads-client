let GoodReads = require('./goodreads');
let goodReads = new GoodReads();

publishAuthorInfo = async () => {
    let authorDetails = await goodReads.getAuthorInfo(3446);
    let books = await goodReads.getBooks(authorDetails);
    let works = await goodReads.getWorks(authorDetails);
    let bookId = books[Math.floor(Math.random() * books.length)];
    let bookInfo = await goodReads.getBookInformation(bookId);


    console.log(bookInfo);
};

publishAuthorInfo();
