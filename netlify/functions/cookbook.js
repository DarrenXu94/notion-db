const { Client } = require("@notionhq/client");
require("dotenv").config();

const notion = new Client({ auth: process.env.NETLIFY_NOTION_API_KEY });

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

exports.handler = async function (event, context) {
  const databaseId = "bb40eda301eb4192bd1539286723ed30";
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ response }),
  };
};
