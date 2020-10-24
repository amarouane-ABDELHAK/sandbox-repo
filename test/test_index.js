const {assert} = require("chai")

const {get_day} = require("../index")

describe('index', () => {
    it('It should return Wednesday', () => {
        let day_returned = get_day(2017, 8, 16)
        assert.equal('Wednesday', day_returned)
    })
})