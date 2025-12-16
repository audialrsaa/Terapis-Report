import { getUserByEmail } from "@/app/lib/actions"
import { compare, compareSync } from "bcryptjs"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    pages: {
        signIn: '/login'
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                const email     = credentials.email
                const password  = credentials.password
                const token     = credentials.token

                const user = await getUserByEmail(email)

                if (!user) return null

                const isValid = compareSync(password, user.password)

                if (!isValid) return null
                
                if (user.role != 'superadmin') {
                    const tokenValid = user.token == token
    
                    if (!tokenValid) return null
                }

                return {
                    id      : user.id,
                    name    : user.username,
                    email   : user.email,
                    role    : user.role,
                }
            }
        })
    ]
})

export { handler as GET, handler as POST }