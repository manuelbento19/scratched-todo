import * as Crypto from 'expo-crypto';

export const GenerateUUID = () =>{
    const  uuid = Crypto.randomUUID();
    return uuid;
}