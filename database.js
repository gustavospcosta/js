const mysql = require('mysql2');

async function createPool() {
    /**
    * This async function is responsible for creating a new MySQL connection pool with specified configurations.
    * @returns {object} - Returns the created MySQL connection pool object if successful, otherwise throws an error.
    * @throws {error} - If unable to create the connection pool, it logs and throws the error.
    */
    console.log(`createPool -> createPool WAS CALLED`);
    try {
      const pool = mysql.createPool({host: 'LOCALHOST', port: PORT, user: 'USER', password: 'PASSWORD', database: 'DATABASENAME'});
      console.log('createPool -> CONNECTION POOL CREATED SUCCESSFULLY!');
      return pool;
    } catch (error) {
      console.log('createPool -> ERROR:', error);
      throw error;
    }
};
  
async function insertReplyData(jsonArray) {
  /**
   * This async function inserts reply data from the given JSON array into the reply_history table of the database.
   * Each item in the JSON array should contain the following keys: senderFullNumber, userName, userFullNumber, userDDDNumber, userNumber, userReply, userReplyDate, userReplyTime.
   * @param {array} jsonArray - An array of JSON objects each representing a reply data to be inserted into the database.
   * @returns {object} - Returns an object containing a key 'isInserted' which indicates whether all items were processed successfully.
   */
  console.log(`insertReplyData -> insertReplyData WAS CALLED`);
  if (jsonArray.length === 0) {
    console.log(`insertReplyData -> NO ITEMS TO PROCESS`);
    return {isInserted: false};
  }
  else {
    const pool = await createPool();
    let allItemsProcessedSuccessfully = true;
    for (let item of jsonArray) {
      const {senderFullNumber, userName, userFullNumber, userDDDNumber, userNumber, userReply, userReplyDate, userReplyTime} = item;
      const query = `INSERT INTO reply_history SET SENDER_FULL_NUMBER = ?, USER_NAME = ?, USER_FULL_NUMBER = ?, USER_DDD_NUMBER = ?, USER_NUMBER = ?, 
      USER_REPLY = ?, USER_REPLY_DATE = ?, USER_REPLY_TIME = ?, DATE_INSERTED = DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s')`;
      console.log(`insertReplyData -> QUERY STATEMENT: ${query}`);
      try {
        const [rows] = await pool.promise().query(query, [senderFullNumber, userName, userFullNumber, userDDDNumber, userNumber, userReply, userReplyDate, userReplyTime]);
        if (rows && rows.affectedRows > 0) {
          console.log(`insertReplyData -> ROWS UPDATED: ${rows.affectedRows}`);
        } 
        else {
          console.log(`insertReplyData -> NO ROWS UPDATED: ${rows.affectedRows}.`);
          allItemsProcessedSuccessfully = false;
        }
      } 
      catch (error) {
        console.error(`insertReplyData -> ERROR: ${error}`);
        allItemsProcessedSuccessfully = false;
      }
    }
    return {isInserted: allItemsProcessedSuccessfully};
  }
};
  
  
async function getAllContacts() {
 /**
  * This async function retrieves all contacts from the reply_history table of the database. 
  * It groups the results by user_full_number and selects the maximum user_name and user_reply (default to 'NULO' if null) for each group.
  * The results are ordered by user_name in ascending order.
  * @returns {array|boolean} - Returns an array of rows if any contacts found, otherwise returns false.
  * @throws {error} - If unable to execute the query, it logs and throws the error.
  */
  console.log(`getAllContacts -> getAllContacts WAS CALLED`);
  const pool = await createPool();
  const query = `SELECT MAX(user_name) AS user_name, user_full_number, MAX(IFNULL(user_reply, 'NULO')) AS user_reply FROM reply_history WHERE user_name IS NOT NULL GROUP BY user_full_number 
  ORDER BY user_name ASC;`;
  try {      
    const [rows] = await pool.promise().query(query);
    if (rows.length > 0) {
      console.log(`getAllContacts -> NEW CONTACTS FOUND: ${JSON.stringify(rows, null, 2)}`);
      return rows;
    } 
    else {
      return false;
    }
  } 
  catch (error) {
    console.error(`getAllContacts -> ERROR: ${error}`);
    return false;
  }
};

async function getSingleContact(userNumber, userName) {
 /**
  * This async function retrieves a single contact from the reply_history table of the database 
  * based on the specified userNumber and userName.
  * @param {string} userNumber - The user number to search for.
  * @param {string} userName - The user name to search for.
  * @returns {boolean} - Returns true if the contact is already registered, otherwise returns false.
  * @throws {error} - If unable to execute the query, it logs and throws the error.
  */
  console.log(`getSingleContact -> getSingleContact WAS CALLED`);
  const pool = await createPool();
  const query = `SELECT user_name, user_number FROM reply_history WHERE user_full_number LIKE ${userNumber} AND user_name LIKE "${userName}"`;
  console.log(`getSingleContact -> QUERY STATEMENT: ${query}`);
  try {      
    const [rows, fields] = await pool.promise().query(query);
    if (rows.length > 0) {
      console.log(`getSingleContact -> CONTACT ALREADY REGISTERED`);
      return true;
    } 
    else {
      console.log(`getSingleContact -> CONTACT NOT REGISTERED`);
      return false;

    }
  } 
  catch (error) {
    console.error(`getSingleContact -> ERROR: ${error}`);
    return false;
  }
};

module.exports = {insertReplyData, getAllContacts, getSingleContact}
