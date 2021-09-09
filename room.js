var fs = require('fs');

const Room = function(room_id, room_number, room_type, room_price, room_status) {
    this.room_id = room_id;
    this.room_number = room_number;
    this.room_type = room_type;
    this.room_price = room_price;
    this.room_status = room_status;
}

Room.prototype.getRoom = function() {
    return `${this.room_id} ${this.room_number} ${this.room_type} ${this.room_price} ${this.room_status}`;
}

var rooms = new Array();
rooms.push(new Room(1, "001","standard", 1100, "occupied clean"));
rooms.push(new Room(2, "010","superior", 1600, "occupied dirty"));
rooms.push(new Room(3, "008","deluxe", 2200, "occupied clean"));
rooms.push(new Room(4, "015","standard", 1100, "occupied clean"))
rooms.push(new Room(5, "012","suite", 3000, "occupied dirty"));

// console.table(rooms);

// createRoom = (id, number, type, price , status) => {
//     let boolean = false;
//     rooms.forEach((room) => {
//         if(room.room_number == number) {
//             console.log("ไม่สร้าง");
//             boolean = true;
//         }
//     })
//     if (boolean == false) {
//         rooms.push(new Room(id,number,type,price,status))
//         return rooms;
//     } else if(boolean == true) {
//         console.log("ไม่สร้าง");
//     }

// }
// createRoom(8,'011', 'deluxe', 2200 ,'occupied clean');
// createRoom(10,'021', 'deluxe', 2200 ,'occupied clean');
// console.table(rooms);


module.exports = {
    rooms: rooms,
    Room: Room
    
};