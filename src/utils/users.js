const users = [];

//
const addUser = ({ id, username, room }) => {
  // clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // validate the data
  if (!username || !room) {
    return {
      error: "Username and room are required!",
    };
  }

  //   check for existing user
  //   find will loop through each user in users array return the user if it exists on the users array
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });
  //   validate username
  if (existingUser) {
    return {
      error: "Username is in use!",
    };
  }

  //   Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};
const getUser = (id) => {
  const user = users.find((user) => user.id === id);
  return user;
};
const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
// addUser({ id: 22, username: "Andrew", room: " South Philly " });
// addUser({ id: 32, username: "mike", room: " South Philly " });
// addUser({ id: 42, username: "andrew", room: " center city " });
