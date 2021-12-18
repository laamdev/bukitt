import S from '@sanity/desk-tool/structure-builder';
import {
  IoFileTrayFullOutline,
  IoHomeOutline,
  IoAirplaneOutline,
  IoAirplaneSharp,
  IoShareSocialOutline,
  IoSettingsOutline,
  IoPeopleOutline,
  IoPencilOutline,
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
                .title('Experiences')
                .icon(IoAirplaneOutline)
                .child(
                  S.document()
                    .schemaType('experiencesPage')
                    .documentId('experiencesPage')
                    .title('Experiences')
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
              S.listItem()
                .title('Tailored Trip')
                .icon(IoPencilOutline)
                .child(
                  S.document()
                    .schemaType('tailoredTripPage')
                    .documentId('tailoredTripPage')
                    .title('Tailored Trip')
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
              S.listItem()
                .title('Contact')
                .icon(IoShareSocialOutline)
                .child(
                  S.document()
                    .schemaType('contact')
                    .documentId('contact')
                    .title('Contact')
                ),
            ])
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'homePage',
            'aboutPage',
            'experiencesPage',
            'destinationsPage',
            'tailoredTripPage',
            'socials',
            'contact',
          ].includes(item.getId())
      ),
    ]);
