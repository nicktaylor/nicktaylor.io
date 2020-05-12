import S from '@sanity/desk-tool/structure-builder'
import {
  MdSettings,
  MdPersonOutline,
  MdInsertDriveFile,
  MdToc,
} from 'react-icons/md'

export default () =>
  S.list()
    .title('Site Content')
    .items([
      S.listItem()
        .title('Contents')
        .icon(MdInsertDriveFile)
        .child(
          S.documentTypeList('content')
            .title('Content')
            .defaultLayout('block')
        ),
      S.listItem()
        .title('Categories')
        .icon(MdToc)
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Authors')
        .icon(MdPersonOutline)
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
    ])
