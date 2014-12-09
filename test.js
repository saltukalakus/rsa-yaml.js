fs   = require('fs');
yaml = require('./');

var my_json = { key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: 5,
    key5: true
};

var metadata_conf = { double_quotes:
    [ 'key1',
        'key2' ] };


var yml_out = yaml.dump(my_json, null, null, null, null, metadata_conf);
fs.writeFile('out.yml', '---\n' + yml_out , function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});
