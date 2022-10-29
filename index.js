const { Client } = require("@notionhq/client");
require("dotenv").config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

(async () => {
  const databaseId = "bb40eda301eb4192bd1539286723ed30";
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  console.log(JSON.stringify(response, null, 2));
})();
