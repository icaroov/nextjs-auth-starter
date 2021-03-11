import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import { PrismaClient } from '@prisma/client'

import { EMAIL, GITHUB, SECRET } from 'utils/constants'

const prisma = new PrismaClient()

const options = {
  providers: [
    Providers.GitHub({
      clientId: GITHUB.clientId,
      clientSecret: GITHUB.clientSecret
    }),
    Providers.Email({
      server: {
        host: EMAIL.server.host,
        port: EMAIL.server.port,
        auth: {
          user: EMAIL.auth.user,
          pass: EMAIL.auth.pass
        }
      },
      from: EMAIL.from
    })
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: SECRET.value
}

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)

export default authHandler
