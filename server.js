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
  checkBooking,
} = require("./hotelBooking");

http
  .createServer(function (req, res) {
    var request_path = url.parse(req.url, true);
    var message = "";
    var status = 200;
    var data = "";

    switch (request_path.pathname) {
      case "/createRoom":
        try {
          let create_room = createRoom(
            parseInt(request_path.query.room_id),
            request_path.query.room_number,
            request_path.query.room_type,
            parseInt(request_path.query.room_price),
            request_path.query.status
          );
          message += `Create room number ${request_path.query.room_number}!`;
          data += JSON.stringify(create_room);
        } catch (err) {
          status = 400;
          message += err;
          console.log(err);
        }
        break;

        case "/createCustomer":
        try { 
          let create_customer = createCustomer(
            parseInt(request_path.query.customer_id),
            request_path.query.customer_name,
            request_path.query.customer_address,
            request_path.query.customer_phone
          );
          message += `Create customer id ${request_path.query.customer_id} for ${request_path.query.customer_name} !`;
          data += JSON.stringify(create_customer);
        } catch (err) {
          status = 400;
          message += err;
          console.log(err);
        }
        break;

        case "/createBooking":
        try { //booking_id,customer_id,room_id,date_in,date_out
          let create_booking = createBooking(
            parseInt(request_path.query.booking_id),
            request_path.query.customer_id,
            request_path.query.room_id,
            request_path.query.date_in,
            request_path.query.date_out
          );
          message += `Create booking id ${request_path.query.booking_id} for customer id ${request_path.query.customer_id} !`;
          data += JSON.stringify(create_booking);
        } catch (err) {
          status = 400;
          message += err;
          console.log(err);
        }
        break;

        case "/deleteBooking":
        try {
          deleteBooking(
            request_path.query.booking_id
          );
          message += `Delete booking id ${request_path.query.booking_id} !`;
        } catch (err) {
          status = 400;
          message += err;
          console.log(err);
        }
        break;

        case "/checkBooking":
        try {
          checkBooking(
            request_path.query.booking_id
          );
          message += `Check booking id ${request_path.query.booking_id}!`
        } catch (err) {
          status = 400;
          message += err;
          console.log(err);
        }
        break;

      default:
        status = 404;
        message = "path not found";

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
      data: data,
    };

    res.writeHead(status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response_object));
  })
  .listen(8080);
console.log("Hotel booking system is running on port 8080.");
