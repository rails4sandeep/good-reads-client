let path = require('path');
let config = require(path.join(__dirname,'./config/configs.json'));
let agentOne = require('superagent');

class GoodReads {
    getAuthorInfo = async (id) => {
        let res = await agentOne
        .get(config['baseUrl'] + 'resources/authors/' + id)
        .set('Accept', 'application/json');
        return res.body;
    };

    getBooks = async (authorInfo) => {
        let books = [];
        const titles = authorInfo.titles.isbn;
        for(const title of titles) {
            books.push(title.$)
        }
        return books;
    };

    getWorks = async (authorInfo) => {
        return  authorInfo.works.works;
    };

    getBookInformation = async (isbn) => {
        let res = await agentOne
        .get(config['baseUrl'] + 'resources/titles/' + isbn + '/')
        .set('Accept', 'application/json');
        return res.body;
    };
}
module.exports = GoodReads;
