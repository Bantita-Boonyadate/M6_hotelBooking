var fs = require('fs');

const {rooms} = require("./room")
const {customers} = require("./customer");

const Booking = function(booking_id,customer_id,room_id,date_in,date_out) {
    this.booking_id = booking_id;
    this.customer_id = customer_id;
    this.room_id = room_id;
    this.date_in = date_in;
    this.date_out = date_out;
}

Booking.prototype.getBooking = function() {
    return `${this.booking_id} ${this.customer_id} ${this.room_id} ${this.date_in} ${this.date_out}`;
}

var booking = new Array();
booking.push(new Booking(1, 1, 1, "2021-09-09", "2021-09-12"));
booking.push(new Booking(2, 2, 2, "2021-09-11", "2021-09-14"));
booking.push(new Booking(3, 3, 3, "2021-09-12", "2021-09-13"));
booking.push(new Booking(4, 4, 4, "2021-09-15", "2021-09-19"))
booking.push(new Booking(5, 5, 5, "2021-09-15", "2021-09-18"));

// console.table(booking);
// console.log(rooms);
// console.log(customers);

// createBooking = (id, customer_id, room_id, date_in, date_out) => {
//     let boolean = false;
//     booking.forEach((book) => {
//         if(book.booking_id == id || (book.room_id  == room_id || book.date_in == date_in && book.date_out == date_out)) {
//             console.log("จองหอง");
//             boolean = true;
//         }
//     })
//     if (boolean == false) {
//         booking.push(new Booking(id, customer_id, room_id, date_in, date_out))
//         return booking;
//     } else if(boolean == true) {
//         console.log("จองแล้ว");
//     }

// }
// createBooking(6, 7, 6, "2021-09-08", "2021-09-10");
// console.table(booking);


module.exports = {
    booking: booking,
    Booking: Booking
    
};