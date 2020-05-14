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
          S.documentList()
            .title('Content Categories')
            .menuItems(S.documentTypeList('category').getMenuItems())
            .filter('_type == $type')
            .params({ type: 'category' })
            .child(categoryId =>
              S.documentList()
                .title('Content')
                .menuItems(S.documentTypeList('content').getMenuItems())
                .filter(
                  '_type == $type && (content.mainCategory._ref == $categoryId || $categoryId in content.categories[]._ref)'
                )
                .params({ type: 'content', categoryId })
            )
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
