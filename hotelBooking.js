var fs = require("fs");

var customers = new Map();
var all_booking = new Map();
var rooms = new Map();

loadData = () => {
  fs.readFile("customer.txt", function (err, filedata) {
    if (err) throw err;

    let customer_data = filedata.toString();
    let customer_lines = customer_data.split("\n");

    customer_lines.forEach((line) => {
      let dat = line.split("-");
      if (customers.has(dat[1])) {
        let prevdata = customers.get(dat[1]);
        prevdata.push({
          customers_id: dat[0],
          address: dat[2],
          phone: dat[3],
        });
      } else {
        customers.set(dat[1], [
          {
            customers_id: dat[0],
            address: dat[2],
            phone: dat[3],
          },
        ]);
      }
    });
  });


  fs.readFile("booking.txt", function (err, filedata) {
    if (err) throw err;

    let booking_data = filedata.toString();
    let booking_lines = booking_data.split("\n");

    booking_lines.forEach((line) => {
      let dat = line.split(" ");
      if (all_booking.has(dat[1])) {
        let prevdata = all_booking.get(dat[1]);
        prevdata.push({
          all_booking_id: dat[0],
          room_id: dat[2],
          time_in: dat[3],
          time_out: date[4],
          total_price: dat[5],
        });
      } else {
        customers.set(dat[1], [
          {
            all_booking_id: dat[0],
            room_id: dat[2],
            time_in: dat[3],
            time_out: date[4],
            total_price: dat[5],
          },
        ]);
      }
    });
  });
  

  fs.readFile("room.txt", function (err, filedata) {
    if (err) throw err;

    let rooms_data = filedata.toString();
    let rooms_lines = rooms_data.split("\n");

    rooms_lines.forEach((line) => {
      let dat = line.split(" ");
      if (rooms.has(dat[2])) {
        let prevdata = rooms.get(dat[2]);
        prevdata.push({
          rooms_id: dat[0],
          room_type_id: dat[1],
          status: dat[3],
        });
      } else {
        rooms.set(dat[1], [
          {
            rooms_id: dat[0],
            room_type_id: dat[1],
            status: dat[3],
          },
        ]);
      }
    });
  });


};


module.exports = {
  loadData: loadData,
  timeline: timeline,
  feed: feed,
  create_tweet: create_tweet,
  follow: follow,
};
