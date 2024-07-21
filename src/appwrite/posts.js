import {Client,Databases} from 'appwrite'
import {appWriteURL , appWriteProjectID , appWriteDatabaseID , appwriteCollectionID} from './config'

export class Service {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(appWriteURL)
            .setProject(appWriteProjectID)
            databases = new Databases(this.client)
    }
    createPost = async({title,slug,content,featuredImage,user}) => {
        try {
            return await this.databases.createDocument(
                appWriteDatabaseID,
                appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    user
                }
            )
        }
        catch(error) {
            throw error;
        }
    }
    deletePost = async({slug}) => {
        try {
            return await this.document.deleteDocument(
                appWriteDatabaseID,
                appwriteCollectionID,
                slug
            )
        } catch (error) {
            throw error;
        }
    }
    updatePost = async({title,slug,content,featuredImage}) => {
        try {
            return await this.document.updateDocument(
                appWriteDatabaseID,
                appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage
                }
            )
            
        } catch (error) {
            throw error;
        }
    }
    listPosts = async() => {
        try {
            return this.document.listDocuments(
                appWriteDatabaseID,
                appwriteCollectionID
            )
        } catch (error) {
            throw error;
        }
    }
    listPost = async({slug}) => {
        try {
            return this.document.getDocument(
                appWriteDatabaseID,
                appwriteCollectionID,
                slug
            )
        
        } catch (error) {
            throw error;
        }
    }
}

