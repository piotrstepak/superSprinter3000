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
    const dataFromCsv = fs.readFileSync(filePath).toString()
                                          .split('\n')
                                          .map(e => e.trim())
                                          .map(e => e.split(';'));
    // console.log(dataFromCsv);
    console.log(`Received index: ${req.params['id']}`);
    const rowIndex = req.params['id'];

    dataFromCsv[rowIndex] = [
        req.body.title, 
        req.body.story, 
        req.body.criteria, 
        req.body.value, 
        req.body.estimation, 
        req.body.status
    ];
    dataFromCsv.shift();
    dataFromCsv.pop();
    console.log(dataFromCsv);

    const headers = ['Story Title', 'User Story', 'Acceptance Criteria', 'Business value', 'Estimation', 'Status'];
    csvWriter = createCsvWriter({
        sendHeaders: true,
        headers: headers,
        separator: ';'
    })
    csvWriter.pipe(fs.createWriteStream(filePath, {flags: 'w'}));
    
    for (data of dataFromCsv) {
        csvWriter.write(data);
    }
    csvWriter.end();
    //uzyc promisea
    res.redirect('/');
}