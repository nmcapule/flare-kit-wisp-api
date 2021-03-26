import Store from '../posts_store'

export async function getPosts() {
  const posts = new Store()
  const body = JSON.stringify(await posts.all())
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return new Response(body, { headers })
}

export async function getPost(request) {
  const posts = new Store()
  const postId = request.params.id

  const body = JSON.stringify(await posts.find(postId))
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return new Response(body, { headers })
}
