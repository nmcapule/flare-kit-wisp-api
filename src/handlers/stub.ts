export async function getStub(request: Request, ...extras: any) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  // return new Response(JSON.stringify(request), { headers })

  const auth0 = {
    domain: AUTH0_DOMAIN,
    clientId: AUTH0_CLIENT_ID,
    clientSecret: AUTH0_CLIENT_SECRET,
    callbackUrl: AUTH0_CALLBACK_URL,
  }
  return new Response(JSON.stringify(auth0), { headers })
}
