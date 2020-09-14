//TODO const ,let ? problme z constami
var fs = require('fs');
var createCsvWriter = require('csv-write-stream');
var csvWriter = createCsvWriter();
const filePath = 'data.csv';

exports.saveDataToCsv = (req, res) => {
    const data = {
        name: req.body.title, 
        story: req.body.story, 
        criteria: req.body.criteria, 
        value: req.body.value, 
        estimation: req.body.estimation,
        status: ['planning']
    };
    console.log(data);
    const headers = ['title', 'story', 'criteria', 'value', 'estimation', 'status'];
  
    (!fs.existsSync(filePath)) ? csvWriter = createCsvWriter({headers: headers}) 
                               : csvWriter = createCsvWriter({sendHeaders: false, separator: ';'});//zastanowic sie
    console.log(data);
    
    csvWriter.pipe(fs.createWriteStream(filePath, {flags: 'a'}));
    csvWriter.write(data);
    csvWriter.end();
    //uzyc promisea
    res.redirect('/');
};

exports.updateDataInCsv = (req, res) => {
    //TODO Error: no headers specified, nie zapisuej(zapisuje ale tylko nowy updateowany wiersz)
    const dataFromCsv = fs.readFileSync(filePath).toString()
                                          .split('\n')
                                          .map(e => e.trim())
                                          .map(e => e.split(';'));
    console.log(dataFromCsv);                                      
    dataFromCsv[1] = [req.body.title, req.body.story, req.body.criteria, req.body.value, req.body.estimation, req.body.status];
    // dataFromCsv.shift;
    console.log(dataFromCsv);

    const headers = ['Story Title', 'User Story', 'Acceptance Criteria', 'Business value', 'Estimation', 'Status'];
    // const headers = ['title', 'story', 'criteria', 'value', 'estimation', 'status'];
    // (!fs.existsSync(filePath)) ? csvWriter = createCsvWriter({headers: headers}) 
    //                            : csvWriter = createCsvWriter({sendHeaders: false, separator: ';'});//zastanowic sie

    csvWriter.pipe(fs.createWriteStream(filePath, {flags: 'w', headers: headers}));//headersy tu ? nie dziala powyzszy ternary?
    csvWriter.write(dataFromCsv);
    csvWriter.end();
    //uzyc promisea
    res.redirect('/');
}