import * as recent from './recent'
import * as saved from './saved'

export default {
  '/recent': recent.router,
  '/saves': saved.router,
}
