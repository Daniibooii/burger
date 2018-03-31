// Import MySQL connection.
var connection = require("../config/connection.js");

// burger = table, callback = function //
selectAll()
var orm = {
selectAll: function(table, callback) {
  var s = "SELECT * FROM " + table + ";";
  connection.query(s, function(error, result){
    if (error) {
      throw error
    }
    callback (result)
  })
}

}



insertOne()
// insert into


updateOne()
// update everything



module.exports = orm;


// possible template below //
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "OreoOreo29!",
  database: "play_listDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  createSong();
});

function createSong() {
  console.log("Inserting a new song...\n");
  var query = connection.query(
    "INSERT INTO songs SET ?",
    {
      title: "cannot think of songs today",
      artist: "dunno",
      genre: "sumit good"
    },
    function(err, res) {
      console.log(res.affectedRows + " song inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      // logs the actual query being run // why not mysql?
      console.log(query.sql);
      updateSong();
    }
  );
}

function updateSong() {
  console.log("Updating all [something]...\n");
  var query = connection.query(
    "UPDATE songs SET ? WHERE ?",
    [
      {
        genre: "Hair Metal"
      },
      {
        genre: "Rock"
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteSong() {
  console.log("Deleting all Grimey...\n");
  connection.query(
    "DELETE FROM songs WHERE ?",
    {
      artist: "Grimes"
    },
    function(err, res) {
      console.log(res.affectedRows + " artist deleted!\n");
      // Call readProducts AFTER the DELETE completes
      afterConnection();
    }
  );
}

function afterConnection() {
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}



// template below //
// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.
var connection = require("./connection.js");
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];
  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }
  return arr.toString();
}
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // vals is an array of values that we want to save to cols
  // cols are the columns we want to insert the values into
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // objColVals would be the columns and values that you want to update
  // an example of objColVals would be {name: panther, sleepy: true}
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
module.exports = orm;




// directions below //

ORM object
// data from two different systems //

// will be tricky; selecting from tables, then inserting it into MySQL db //
