const fs = require('fs');
const filePath = 'data.csv';

exports.home = (req, res) => {
    const data = fs.readFileSync(filePath).toString()
                                          .split('\n')
                                          .map(e => e.trim())
                                          .map(e => e.split(';'));
    res.render('home', {data: data});
};