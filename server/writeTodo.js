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

const addToDB = async(todo) => {
    try{
        const res = await database.createDocument(
            APPWRITE_DATABASEID,
            APPWRITE_NOTE_COLLECTIONID,
            ID.unique(), 
            todo
        )
        console.log(res)
    }catch(e){
        console.log(e)
    }

}

const writeData = async() => {
    console.log('Starting writing todos to the DB')
    for(const todo of todos){
        await addToDB(todo)
    }
    console.log('Done writing todos to the DB')
}

writeData()