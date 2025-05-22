import { groq } from 'next-sanity'
import { client } from './client'

export const getHeader = async () => {
  const query = groq`*[_type == "header"][0]{
    logo {
      asset->{
        url
      }
    },
    menuItems[]{
      title,
      url,
      subItems[]{
        title,
        url
      }
    },
    authLinks[]{
      title,
      url,
      isButton
    }
  }`

  return await client.fetch(query)
}