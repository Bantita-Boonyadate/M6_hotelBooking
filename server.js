var http = require("http");
var url = require("url");
var fs = require("fs");

const {
  createRoom,
  deleteRoom,
  createCustomer,
  deleteCustomer,
  createBooking,
  deleteBooking,
} = require("./hotelBooking");


http
  .createServer(function (req, res) {
    var request_path = url.parse(req.url, true);
    var message = '';
    var status = 200;
    var data;

    switch (request_path.pathname) {
      case "/createRoom":
        try {  //id, number, type, price , status
          createRoom(request_path.query.room_id, request_path.query.room_number, request_path.query.room_type, parseInt(request_path.query.room_price), request_path.query.room_status);
          message += `Create room number ${request_path.query.room_number}!`;
          data = createRoom(request_path.query.room_id, request_path.query.room_number, request_path.query.room_type, parseInt(request_path.query.room_price), request_path.query.room_status);
        } catch (err) {
          status = 400;
          message += err;
          console.log(err);
        }
        break;

      default:
        status = 404;
        message = 'path not found';
        
        break;
    }

    let access_log = new Date().toISOString() + `${request_path.path}\n`;

    fs.appendFile("access.log", access_log, (err) => {
      if (err) {
        throw err;
        console.log(err);
      }
    });

    let response_object = {
      statusCode: status,
      message: message,
      data: data
    };

    res.writeHead(status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response_object));
  })
  .listen(8080);
console.log("Inventory system is running on port 8080.");
