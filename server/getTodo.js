const { Client, Databases, ID } = require('node-appwrite')
const todos = require('./todoList.json')
const {
    APPWRITE_ENDPOINT,
    APPWRITE_PROJECTID,
    APPWRITE_APIKEY,
    APPWRITE_DATABASEID,
    APPWRITE_NOTE_COLLECTIONID,
} = require('./config/config')

const client = new Client()
.setEndpoint(APPWRITE_ENDPOINT)
.setProject(APPWRITE_PROJECTID)
.setKey(APPWRITE_APIKEY)
.setSelfSigned() // ! only for dev mode - will give us a self signed SSL certificate

const database = new Databases(client, APPWRITE_DATABASEID)

const getFromDB = async() => {
    try{
        const res = await database.listDocuments(
            APPWRITE_DATABASEID,
            APPWRITE_NOTE_COLLECTIONID,
            [
                "limit(1)",
            ]
        )
        console.log(res)
    }catch(e){
        console.log(e)
    }

}

getFromDB()