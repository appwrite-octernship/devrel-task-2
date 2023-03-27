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

const deleteFromDB = async(id) => {
    try{
        const res = await database.deleteDocument(
            APPWRITE_DATABASEID,
            APPWRITE_NOTE_COLLECTIONID,
            id
        )
    }catch(e){
        console.log(e)
    }

}

const deleteData = async() => {
    console.log('Starting deleting todos from the DB')
    await deleteFromDB("64219f45646d9af29333");
    console.log('Finished deleting todos from the DB')
}   
deleteData()