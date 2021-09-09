var fs = require("fs");

const { rooms, Room } = require("./room");
const { customers, Customer } = require("./customer");
const { booking, Booking } = require("./booking");

//room.js

//createRoom

const regex_id = /^\d{1,}$/;
const regex_number = /^[0]\d{2}$/;
const regex_string = /^[a-zA-Z ]{5,}$/;
const regex_price = /^\d{3,}$/;

createRoom = (id, number, type, price, status) => {
  let boolean = false;
  if (
    regex_id.test(id) &&
    regex_number.test(number) &&
    regex_string.test(type) &&
    regex_price.test(price) &&
    regex_string.test(status)
  ) {
    rooms.forEach((room) => {
      if (room.room_number == number) {
        boolean = true;
      }
    });
    if (boolean == false) {
      rooms.push(new Room(id, number, type, price, status));
      console.log("This room id has been created successfully.");
      console.table(rooms);
      return rooms;
    } else if (boolean == true) {
      console.log(
        "This room has already been created."
      );
    }
  } else {
    console.log("Failed to create a room.");
  }
};

// createRoom(9,'017', 'suite', 3000 ,'occupied dirty');
// createRoom(15,'003', 'standard', 1100 ,'occupied dirty');
console.table(rooms);

//deleteRoom

deleteRoom = (id) => {
  let boolean = false;
  let index;
  rooms.forEach((room) => {
    if (room.room_id == id) {
      boolean = true;
    }
  });
  index = rooms.findIndex((rooms) => rooms.room_id == id);
  if (boolean == true) {
    rooms.splice(index, 1);
    console.log("This room id has been deleted successfully.");
    console.table(rooms);
    return rooms;
  } else if (boolean == false) {
    console.log("This room id does not exist.");
  }
};
// deleteRoom(5);
// console.table(rooms);

//customer.js

const regex_name = /^[A-Z]\w{1,}$/;
const regex_address = /^[A-Z][a-zA-Z, ]{5,}$/;
const regex_phone = /^[0][6,8,9]\d{8}$/;

createCustomer = (id, name, address, phone) => {
  let boolean = false;
  if (
    regex_id.test(id) &&
    regex_name.test(name) &&
    regex_address.test(address) &&
    regex_phone.test(phone)
  ) {
    customers.forEach((customer) => {
      if (customer.customer_id == id) {
        boolean = true;
      }
    });
    if (boolean == false) {
      customers.push(new Customer(id, name, address, phone));
      console.log("This customer id has been created successfully.");
      console.table(customers);
      return customers;
    } else if (boolean == true) {
      console.log("This customer has already used this id.");
    }
  } else {
    console.log("Failed to create a customer.");
  }
};

// createCustomer(8, "Gunny", "Los Angeles, United States", "0972365401");
// createCustomer(10, "Tat", "Riga, Latvia", "0826781239");
console.table(customers);

//deleteCustomer

deleteCustomer = (id) => {
  let boolean = false;
  let index;
  customers.forEach((customer) => {
    if (customer.customer_id == id) {
      boolean = true;
    }
  });
  index = customers.findIndex((customers) => customers.customer_id == id);
  if (boolean == true) {
    customers.splice(index, 1);
    console.log("This customer id has been deleted successfully.");
    console.table(customers);
    return customers;
  } else if (boolean == false) {
    console.log("This customer id does not exist.");
  }
};
// deleteCustomer(5);
// console.table(customers);

//booking.js

//createBooking

const regex_date = /^\d{4}-\d{2}-\d{2}$/;

createBooking = (id, customer_id, room_id, date_in, date_out) => {
  let boolean = false;
  if (
    regex_id.test(id) &&
    regex_id.test(customer_id) &&
    regex_id.test(room_id) &&
    regex_date.test(date_in) &&
    regex_date.test(date_out)
  ) {
    booking.forEach((book) => {
      if (
        book.booking_id == id ||
        book.room_id == room_id ||
        (book.date_in == date_in && book.date_out == date_out)
      ) {
        boolean = true;
      }
    });
    if (boolean == false) {
      booking.push(new Booking(id, customer_id, room_id, date_in, date_out));
      console.log("This booking id has been created successfully.");
      console.table(booking);
      return booking;
    } else if (boolean == true) {
      console.log("This booking for this id has already been reserved.");
    }
  } else {
    console.log("Failed to create a booking.");
  }
};

// createBooking(6, 7, 6, "2021-09-08", "2021-09-10");
console.table(booking);

//deleteBooking

deleteBooking = (id) => {
  let boolean = false;
  let index;
  if (regex_id.test(id)) {
    booking.forEach((book) => {
      if (book.booking_id == id) {
        boolean = true;
      }
    });
    index = booking.findIndex((booking) => booking.booking_id == id);
    if (boolean == true) {
      booking.splice(index, 1);
      console.log("This booking id has been deleted successfully.");
      console.table(booking);
      return booking;
    } else if (boolean == false) {
      console.log("There are no reservations on this id.");
    }
  } else {
    console.log("Failed to delete a booking.");
  }
};

// deleteBooking(5);
// console.table(booking);

//checkBooking

checkBooking = (id) => {
  let boolean = false;
  if (regex_id.test(id)) {
    booking.forEach((book) => {
      if (book.booking_id == id) {
        console.log("This id has been reserved.");
        console.table(booking);
        boolean = true;
      }
    });
    if (boolean == false) {
      console.log("This id is not reserved.");
      // console.table(booking);
      return booking;
    }
  } else {
    console.log("Failed to check a booking.");
  }
};

// checkBooking(8);
// console.table(booking);

module.exports = {
  createRoom: createRoom,
  deleteRoom: deleteRoom,
  createCustomer: createCustomer,
  deleteCustomer: deleteCustomer,
  createBooking: createBooking,
  deleteBooking: deleteBooking,
  checkBooking: checkBooking,
};
