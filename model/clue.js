const model = require('./base.js');
class mood extends model {
    constructor(props = 'clue') {
        super(props)
    }
}
module.exports = mood;