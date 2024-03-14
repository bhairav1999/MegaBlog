import conf from "../conf/conf";

import { Client, ID ,Databases, Query , Storage} from "appwrite";

export class Service{
     client = new Client()
     database;
     bucket;
     WorldBeyond@
     constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client)WebCWW2023;

    }
}

const service = new Service();

export default service;
