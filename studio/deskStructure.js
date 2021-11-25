import S from '@sanity/desk-tool/structure-builder';
import {
  IoFileTrayFullSharp,
  IoHome,
  IoListSharp,
  IoListCircleOutline,
} from 'react-icons/io5';

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Pages')
        .icon(IoFileTrayFullSharp)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .icon(IoHome)
                .child(
                  S.document().schemaType('homePage').documentId('homePage')
                ),
              S.listItem()
                .title('Adventure')
                .icon(IoListSharp)
                .child(
                  S.document()
                    .schemaType('adventuresPage')
                    .documentId('adventuresPage')
                ),
              S.listItem()
                .title('Destination')
                .icon(IoListCircleOutline)
                .child(
                  S.document()
                    .schemaType('destinationsPage')
                    .documentId('destinationsPage')
                ),
            ])
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) =>
          !['homePage', 'adventuresPage', 'destinationsPage'].includes(
            item.getId()
          )
      ),
    ]);
