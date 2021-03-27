import { Router } from 'itty-router'

import { getPosts, getPost } from './handlers/posts'
import { getStub } from './handlers/stub'

const router = Router()

router
  .get('/api/posts', getPosts)
  .get('/api/posts/:id', getPost)
  .get('/api/stub', getStub)
  .get('*', () => new Response('Not found', { status: 404 }))

export const handleRequest = (event: FetchEvent) =>
  router.handle(event.request, event)
