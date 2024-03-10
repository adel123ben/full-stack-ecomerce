import  CredentialsProvider  from "next-auth/providers/credentials";
import axios from "axios"
import type { NextAuthOptions } from "next-auth";

export const authOptions:NextAuthOptions = {
   secret:process.env.NEXTAUTH_SECRET,
   pages:{
     signIn:"/auth/login",
     signOut:"/auth/login"
   },
   session:{
        strategy:"jwt",
        maxAge:60 *30
   },
   callbacks:{
    async jwt({token,user}){
        if(user){
            token.user = user
        }
        return token
    },
    // @ts-ignore
    async session({session,token}){
        if(token){
            // @ts-ignore 
            session.user = token.user
        }
        return session
    }
   },
   providers:[
     CredentialsProvider({
        name:"crendentials",
        credentials:{
            email:{label:"email",type:"text"},
            password:{label:"password",type:"password"}
        },
        async authorize(credentials){
            const formData :{
                email:string |undefined,
                password:string |undefined
            } = {
                email:credentials?.email,
                password:credentials?.password
            }
            const response = await axios.post(`${process.env.API_URL}/auth/login`,formData)
            const user = response.data
            if(user){
                return user
            }else{
                return null
            }
            
        }
       }),
    
   ]
}