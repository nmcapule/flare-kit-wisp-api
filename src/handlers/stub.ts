export async function getStub(request: Request) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return new Response(JSON.stringify(request), { headers })
}
