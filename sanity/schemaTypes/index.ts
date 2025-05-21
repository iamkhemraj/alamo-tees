import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {productType} from './productType'

export const schemaTypes = [productType]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, productType],
}
