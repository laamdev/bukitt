import S from '@sanity/desk-tool/structure-builder';
import {
  IoFileTrayFullOutline,
  IoHomeOutline,
  IoAirplaneOutline,
  IoAirplaneSharp,
  IoShareSocialOutline,
  IoSettingsOutline,
  IoPeopleOutline,
} from 'react-icons/io5';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .icon(IoFileTrayFullOutline)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .icon(IoHomeOutline)
                .child(
                  S.document()
                    .schemaType('homePage')
                    .documentId('homePage')
                    .title('Home')
                ),
              S.listItem()
                .title('About')
                .icon(IoPeopleOutline)
                .child(
                  S.document()
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                    .title('About')
                ),
              S.listItem()
                .title('Adventures')
                .icon(IoAirplaneOutline)
                .child(
                  S.document()
                    .schemaType('adventuresPage')
                    .documentId('adventuresPage')
                    .title('Adventures')
                ),
              S.listItem()
                .title('Destinations')
                .icon(IoAirplaneSharp)
                .child(
                  S.document()
                    .schemaType('destinationsPage')
                    .documentId('destinationsPage')
                    .title('Destinations')
                ),
            ])
        ),

      S.listItem()
        .title('Site Settings')
        .icon(IoSettingsOutline)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('Socials')
                .icon(IoShareSocialOutline)
                .child(
                  S.document()
                    .schemaType('socials')
                    .documentId('socials')
                    .title('Socials')
                ),
            ])
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'homePage',
            'aboutPage',
            'adventuresPage',
            'destinationsPage',
            'socials',
          ].includes(item.getId())
      ),
    ]);
