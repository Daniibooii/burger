

-- template below --

INSERT INTO clients (client_name) VALUES ('Bilal');
INSERT INTO clients (client_name) VALUES ('Brianne');
INSERT INTO clients (client_name) VALUES ('Vincent');

INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Everybody Loves Raymond', 'tv', 500, 1);
INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Big Bang Theory', 'tv', 900, 1);
INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Top Gun', 'movie', 200, 2);
INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Whiskey', 'grown-up', 300, 2);
INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Cigar', 'grown-up', 250, 3);

-- dummy data goes here --



In this file, write insert queries to populate the burgers table with at least three entries.



Now you're going to run these SQL files.

Make sure you're in the db folder of your app.

Start MySQL command line tool and login: mysql -u root -p.

With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.

Close out of the MySQL command line tool: exit.
