const sdk = require("node-appwrite");
const { MeiliSearch } = require('meilisearch')

module.exports = async function (req, res) {
  const client = new sdk.Client();

  console.log(req.variables)

  if (
    !req.variables['APPWRITE_FUNCTION_ENDPOINT'] ||
    !req.variables['APPWRITE_API_KEY'] ||
    !req.variables['APPWRITE_FUNCTION_ID'] ||
    !req.variables['MEILISEARCH_HOST'] ||
    !req.variables['MEILISEARCH_API_KEY']
  ) {
    throw("Environment variables are not set. Function cannot use Appwrite SDK.");
  } else {
    client
      .setEndpoint(req.variables['APPWRITE_FUNCTION_ENDPOINT'])
      .setProject(req.variables['APPWRITE_FUNCTION_ID'])
      .setKey(req.variables['APPWRITE_API_KEY'])
      .setSelfSigned(true);
  }

  if(
    // ! will be set automatically by Appwrite
    !req.variables["APPWRITE_FUNCTION_EVENT_DATA"]
  ) {
    throw "Missing event data!"
  }

  const meiliConfig = {
    host: req.variables["MEILISEARCH_HOST"],
    apiKey: req.variables["MEILISEARCH_API_KEY"]
  }
  const meiliClient = new MeiliSearch(meiliConfig)
  const data = JSON.parse(req.variables["APPWRITE_FUNCTION_EVENT_DATA"])
  const result = await meiliClient.index("todo").deleteDocument(data.$id);
  console.log(result)

  res.json(data).status(200);
};
