import db from '../config/db.js';

// get all users
export const getAllUsers = async (req, res) => {
    try {
        const res = await db.query(`
           SELECT 
           id,
           firstname,
           lastname,
           email,
           phone,
           role
           FROM users
           `);
        return res.rows;
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// get user by ID
export const getUserById = async (id) => {
  const result = await db.query(
    `SELECT
        id,
        firstname,
        lastname,
        email,
        phone,
        role
     FROM users
     WHERE id = $1`,
    [id],
  );

  return result.rows[0];
};

// get user by email
export const getUserByEmail = async (email) => {
  const result = await db.query(
    `SELECT id,
            firstname,
            lastname,
            email,
            phone,
            password,
            role
     FROM users
     WHERE email = $1`,
    [email],
  );

  return result.rows[0];
};

// Create a new user
export const createUser = async (userData) => {
  const { firstname, lastname, email, phone, password } = userData;

  const result = await db.query(
    `INSERT INTO users
      (firstname, lastname, email, phone, password)
     VALUES
      ($1, $2, $3, $4, $5)
     RETURNING
      id,
      firstname,
      lastname,
      email,
      phone,
      role`,
    [firstname, lastname, email, phone, password],
  );

  return result.rows[0];
};

// Update a user by ID
export const updateUserById = async (id, userData) => {
  const currentUser = await db.query(
    `SELECT *
       FROM users
       WHERE id = $1`,
    [id],
  );

  if (!currentUser.rows[0]) {
    return null;
  }

  const existing = currentUser.rows[0];

  const firstname = userData.firstname ?? existing.firstname;

  const lastname = userData.lastname ?? existing.lastname;

  const email = userData.email ?? existing.email;

  const phone = userData.phone ?? existing.phone;

  const password = userData.password ?? existing.password;

  const result = await db.query(
    `UPDATE users
     SET firstname = $1,
         lastname = $2,
         email = $3,
         phone = $4,
         password = $5
     WHERE id = $6
     RETURNING
       id,
       firstname,
       lastname,
       email,
       phone,
       role`,
    [firstname, lastname, email, phone, password, id],
  );

  return result.rows[0];
};

// Delete a user by ID
export const deleteUserById = async (id) => {
    try {
        const res = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        return res.rows[0];
    } catch (error) {
        console.error('Error deleting user:', error);
        throw new Error('Internal Server Error');
    }
};