import { genSalt, hash, compare } from "bcrypt"

const SALT_RANDOMS = 8;

const hashPassword =  async(password:string) => {
    const saltGenerated = await genSalt(SALT_RANDOMS);
    return  await hash(password, saltGenerated);
    

}

const verifyPassword =  async (password: string, hashPassword:string) => {
  return await compare(password, hashPassword);

};


export const PasswordCrypto = {
    hashPassword,
    verifyPassword,
}



