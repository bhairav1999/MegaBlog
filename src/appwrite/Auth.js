import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthServise {
    client = new Client();
    account;
    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

    }
    async createAccount({ email, password, name }) {
        try {
            const useAcount = await this.account.create(ID.unique(), email, password, name);
            if (useAcount) {
                //    another account
                return this.account.login({ email, password })
            } else {
                return useAcount
            }
        } catch (error) {
            throw error
        }
    }


    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
        return null
    }

    async logOut(){
        try {
            return await this.account.deleteSession()
        } catch (error) {
            throw error
        }
    }

}

const authServise = new AuthServise();

export default authServise;