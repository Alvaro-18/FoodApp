import axios from "axios";

const key = {
  key_firebase: "AIzaSyDOA8AwvPNvoIOvVAZaGUGL2deEOec44Vo"
};

export async function createUser(name:string, email:string, password:string){
  /*
  const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key.key_firebase}`, {
   displayName:name,
   email: email,
   password:password,
 });
 */
}

export async function logUser(email:string, password:string) {
  /*
 const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key.key_firebase}`,{
   email: email,
   password:password,
 });
*/
 //await AsyncStorage.setItem("username", response.data.displayName);
// await AsyncStorage.setItem("token", response.data.idToken);
}

export async function resetPassword(email:string){
  /*
 const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${key.key_firebase}`, {
   requestType: "PASSWORD_RESET",
   email: email,
 });
 */
}