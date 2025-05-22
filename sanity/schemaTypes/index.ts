import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {productType} from './productType'
import {headerType} from './global/header'
import {footerType} from './global/footer'

export const schemaTypes = [productType, headerType, footerType]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, productType, headerType , footerType],
}
