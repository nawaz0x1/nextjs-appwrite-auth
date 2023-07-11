import { Client, Account, ID } from 'appwrite';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(projectId);

const account = new Account(client);

const promise = account.create(ID.unique(), 'team@appwrite.io', 'password');

export const createUserAccount = async ({ name, email, password }) => {
  try {
    const response = await account.create(ID.unique(), email, password, name);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await account.createEmailSession(email, password);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const response = await account.get();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async (sessionID = 'current') => {
  try {
    const response = await account.deleteSession(sessionID);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const isLoggedIn = async () => {
  const user = await getUser();
  return Boolean(user);
};
