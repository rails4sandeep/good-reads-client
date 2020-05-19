let GoodReads = require('./goodreads');
let goodReads = new GoodReads();

publishAuthorInfo = async () => {
    let authorDetails = await goodReads.getAuthorInfo(3446);
    console.log(JSON.stringify(authorDetails));
}

publishAuthorInfo();