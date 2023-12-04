import { createClient } from 'newt-client-js'

export interface Article {
  title: string
  slug: string
  body: string
}

export const newtClient = createClient({
  spaceUid: 'ymeguro',
  token: 'iQb0OejkKa5JsUE39Uyg2bk3xU3q_2d_1udDEq4tAFg',
  apiType: 'cdn',
})
