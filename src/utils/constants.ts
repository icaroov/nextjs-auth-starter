export const EMAIL = {
  server: {
    host: String(process.env.SMTP_HOST),
    port: Number(process.env.SMTP_PORT)
  },
  auth: {
    user: String(process.env.SMTP_USER),
    pass: String(process.env.SMTP_PASSWORD)
  },
  from: String(process.env.SMTP_FROM)
}

export const GITHUB = {
  clientId: String(process.env.GITHUB_ID),
  clientSecret: String(process.env.GITHUB_SECRET)
}

export const SECRET = {
  value: process.env.SECRET
}
