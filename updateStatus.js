const fs = require("fs");
const fetch = require("node-fetch");

fs.writeFileSync("status.json", `{"datetime": "${new Date().toISOString()}"}`);
