import {Client,Account,ID} from 'appwrite'
import { config } from './config';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appwriteProjectID)
        this.account = new Account(this.client)
    }
    createAccount = async({email,name,password}) => {
        try {
            const id = ID.unique();
            console.log(id)
            const user = await this.account.create(id,email,password,name)
            if(user) await this.loginAccount({email,password})

            return user
        }
        catch(e) {
            throw error;
        }
    }
    loginAccount = async({email,password}) => {
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error;
        }
    }
    getUser = async() => {
        try {
            return await this.account.get()
        } catch (error) {
            throw error;
        }
    }
    listSessions = async() => {
        try {
            return await this.account.listSessions();
        } catch (error) {
            throw error;
        }
    }
    logoutAccount = async() => {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log(error)
        }
    }
}

export const authService = new AuthService();
