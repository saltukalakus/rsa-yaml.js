rsa-yaml.js
=======

This project is a fork of <a href=https://github.com/jeremyfa/yaml.js.git>yaml.js</a> Please check it's documentation first.

In this fork I have made below changes on JSON to YAML converter (Dumper.js). 

-) In JSON key-value pairs, YML output of string values are wrapped with single quotes by default.

-) A configuration metadata JSON object can be passed as last parameter to Dumper function to wrap selected keys values to be wrapped in double quotes.

Sample use
----------
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
    
For this sample values for key1, key2 will be double quoted, and value for key3 will be single quoted in the generated file.
 
Use with node.js
----------------

Install module:

``` bash
npm install rsa-yamljs
```

Hope it helps someone out there. As a side note, I removed the coffee scripts and coded directly on the javascript files.
