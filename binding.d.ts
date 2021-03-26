export {}

declare global {
  const SALT: string
  const AUTH0_DOMAIN: string
  const AUTH0_CLIENT_ID: string
  const AUTH0_CLIENT_SECRET: string
  const AUTH0_CALLBACK_URL: string

  const AUTH_STORE: KVNamespace
}
