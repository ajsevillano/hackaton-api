// GET ALL USERS
export function getAllUsers() {
  //Return all the users
  // const data = await query(`SELECT * FROM  users;`);
  // return responseHandler(true, data.rows);
  const data = [
    { id: 1, name: 'Mike' },
    { id: 2, name: 'Andrew' },
  ];
  return data;
}
