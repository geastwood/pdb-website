var fs = require('fs');

fs.readFile(__dirname + '/color.txt', 'utf8', function(err, content) {
    var lines = content.split('\n')
                       .filter(line => line.length > 0)
                       .map(line => {
                           var split = line.split(':');
                           return {source: split[0], target: split[1]};
                       });
    fs.writeFile(__dirname + '/color.json', JSON.stringify(lines, null, 4));
});
