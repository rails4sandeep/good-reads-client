let path = require('path')
let config = require(path.join(__dirname,'./config/configs.json'))
let agentOne = require('superagent')

class GoodReads {
    getAuthorInfo = async (id) => {
        let res = await agentOne
        .get(config['baseUrl'] + 'resources/authors/' + id)
        .set('Accept', 'application/json')        
        return res.body;
    }
}
module.exports = GoodReads;