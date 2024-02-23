import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Next-Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username..." },
        password: { label: "Password", type: "password",placeholder: "password..." },
        },
        async authorize(credentials, req) {
            return {email:'roya2002_rm@yahoo.com'}
        }
    }),
  ],
});
