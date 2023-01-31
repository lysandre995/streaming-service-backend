const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const contents = ['movies', 'tv_series'];

for (const content of contents) {
  const tableFile = fs.readFileSync(`./sql/${content}.sql`).toString();
  const connection = new sqlite3.Database('streaming_service.db');
  connection.serialize(() => {
    connection.exec(tableFile);
  });
  connection.close();
}
