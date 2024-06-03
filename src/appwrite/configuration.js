import config from "../config/config.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    return await this.databases.createDocument(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      slug,
      {
        title,
        content,
        featuredImage,
        status,
        userId,
      }
    );
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    return await this.databases.updateDocument(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      slug,
      {
        title,
        content,
        featuredImage,
        status,
      }
    );
  }

  async deletePost(slug) {
    await this.databases.deleteDocument(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      slug
    );
    return true;
  }

  async getPost(slug) {
    return await this.databases.getDocument(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      slug
    );
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    return await this.databases.listDocuments(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      queries
    );
  }

  // file upload services

  async uploadFile(file) {
    return await this.bucket.createFile(
      config.appwriteBucketId,
      ID.unique(),
      file
    );
  }

  async deleteFile(fileId) {
    await this.bucket.deleteFile(config.appwriteBucketId, fileId);
    return true;
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
