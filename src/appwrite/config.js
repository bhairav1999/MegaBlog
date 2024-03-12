import conf from "../conf/conf";

import { Client, ID ,Databases, Query , Storage} from "appwrite";

export class Service{
     client = new Client()
     database;
     bucket;
     constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }
}

const service = new Service();

export default service;
