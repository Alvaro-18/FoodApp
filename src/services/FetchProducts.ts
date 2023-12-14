import axios from "axios";

const key = {
  key_firebase: "AIzaSyDOA8AwvPNvoIOvVAZaGUGL2deEOec44Vo"
};

export async function createUser(name:string, email:string, password:string){
  const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key.key_firebase}`, {
   displayName:name,
   email: email,
   password:password,
  });
}
