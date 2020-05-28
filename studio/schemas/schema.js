// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import author from './documents/author'
import content from './documents/content'
import siteSettings from './documents/siteSettings'
import category from './documents/category'
import externalLink from './objects/externalLink'
import internalLink from './objects/internalLink'
import fullPortableText from './objects/fullPortableText'
import seoImage from './objects/seoImage'
import simplePortableText from './objects/simplePortableText'
import fullPortableTextObject from './objects/fullPortableTextObject'
import contentList from './objects/contentList'
import contentObject from './objects/contentObject'
import socialLink from './objects/socialLink'
import header from "./objects/header";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    author,
    contentList,
    content,
    contentObject,
    header,
    siteSettings,
    socialLink,
    category,
    externalLink,
    internalLink,
    fullPortableText,
    fullPortableTextObject,
    simplePortableText,
    seoImage,
  ]),
})
