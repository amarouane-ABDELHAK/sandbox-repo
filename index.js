const moment = require('moment')

const get_day = (year, month, day) => {
    month =  (month < 10) ? `0${month}` : month
    day =  (day < 10) ? `0${day}` : day
    return moment(`${year}-${month}-${day}T00:00:01`).format('dddd')
}
module.exports = {
    get_day
}