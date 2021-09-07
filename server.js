var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    
    var request_path = url.parse(req.url, true);
    var message = '';
    var data;
    var status = 200;

    switch(request_path.pathname) {
        case '/': 
            try {
                
            } catch(err) {
                message += err;
                console.log(err);
            }
            break;

        case '/': 
            try {
                
            } catch(err) {
                message += err;
                console.log(err);
            }
            break;

        case '/':
            try {
                
            } catch(err) {
                message += err;
                console.log(err);
            }
            break;

        case '/': 
            try {
               
            } catch(err) {
                message += err;
                console.log(err);
            }
            break;
    }

    let response_object = {
        statusCode: status,
        message: message,
        data: data
    };

	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(response_object));
    
}).listen(8080);
console.log('Twt application is running on port 8080.');

