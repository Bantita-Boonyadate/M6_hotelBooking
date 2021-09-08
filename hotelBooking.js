var fs = require('fs');

const {rooms, Room} = require("./room");
const {customers, Customer} = require("./customer");
const {booking, Booking} = require("./booking");


//room.js

//createRoom 

createRoom = (id, number, type, price , status) => {
    let boolean = false;
    rooms.forEach((room) => {
        if(room.room_number == number) {
            console.log("ไม่สร้าง");
            boolean = true;
        }
    })
    if (boolean == false) {
        rooms.push(new Room(id,number,type,price,status))
        return rooms;
    } else if(boolean == true) {
        console.log("ไม่สร้าง");
    }
}

createRoom(9,'017', 'suite', 3000 ,'occupied dirty');
createRoom(15,'003', 'standard', 1100 ,'occupied dirty');
// console.table(rooms);

//deleteRoom

deleteRoom = (id) => {
    let boolean = false;
    let index;
    rooms.forEach((room) => {
        if(room.room_id == id) {
            boolean = true;
        }
    })
    index = rooms.findIndex(rooms => rooms.room_id == id)
    if(boolean == true) {
        rooms.splice(index , 1)
        return rooms;
    } else if(boolean == false) {
        console.log("ไม่มีห้องนี้ค่าาา");
    }
}
deleteRoom(5);
// console.table(rooms);

//customer.js

createCustomer = (id, name, address, phone) => {
    let boolean = false;
    customers.forEach((customer) => {
        if(customer.customer_id == id) {
            console.log("ไม่สร้าง");
            boolean = true;
        }
    })
    if (boolean == false) {
        customers.push(new Customer(id, name, address, phone))
        return customers;
    } else if(boolean == true) {
        console.log("ไม่สร้าง");
    }

}

createCustomer(8, "Gunny", "Los Angeles, United States", "0972365401");
createCustomer(10, "Tat", "Riga, Latvia", "0826781239");
// console.table(customers);

//deleteCustomer

deleteCustomer = (id) => {
    let boolean = false;
    let index;
    customers.forEach((customer) => {
        if(customer.customer_id == id) {
            boolean = true;
        }
    })
    index = customers.findIndex(customers => customers.customer_id == id)
    if(boolean == true) {
        customers.splice(index , 1)
        return customers;
    } else if(boolean == false) {
        console.log("ไม่มีคนนี้ค่าาาา");
    }
}
deleteCustomer(5);
// console.table(customers);


//booking.js

//createBooking

createBooking = (id, customer_id, room_id, date_in, date_out) => {
    let boolean = false;
    booking.forEach((book) => {
        if(book.booking_id == id || (book.room_id  == room_id || book.date_in == date_in && book.date_out == date_out)) {
            console.log("จองหอง");
            boolean = true;
        }
    })
    if (boolean == false) {
        booking.push(new Booking(id, customer_id, room_id, date_in, date_out))
        return booking;
    } else if(boolean == true) {
        console.log("จองแล้ว");
    }

}

createBooking(6, 7, 6, "2021-09-08", "2021-09-10");
// console.table(booking);

//deleteBooking

deleteBooking = (id) => {
    let boolean = false;
    let index;
    booking.forEach((book) => {
        if(book.booking_id == id) {
            boolean = true;
        }
    })
    index = booking.findIndex(booking => booking.booking_id == id)
    if(boolean == true) {
        booking.splice(index , 1)
        return booking;
    } else if(boolean == false) {
        console.log("ไม่มีคนนี้ค่าาาา");
    }
}

deleteBooking(5);
// console.table(booking);

//checkBooking 

checkBooking = (id) => {
    let boolean = false;
    booking.forEach((book) => {
        if(book.booking_id == id) {
            console.log("ไอดีนี้มีคนจองแล้วน้าจร้าาาหยั่มมานะแม่");
            boolean = true;
        }
    })
    if (boolean == false) {
        console.log("ยังไม่มีคนจองเป็นเจ้าของ(หัวจวายย วร้ายยตัยล้าวววพส)");
    } else if(boolean == true) {
        console.log("ไอดีนี้มีคนจองแล้วน้าจร้าาาหยั่มมานะแม่");
    }
}

checkBooking(8);
console.table(booking);


module.exports = {
    createRoom: createRoom,
    deleteRoom: deleteRoom,
    createCustomer: createCustomer,
    deleteCustomer: deleteCustomer,
    createBooking: createBooking,
    deleteBooking: deleteBooking
}