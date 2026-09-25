import { defineQuery, groq } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`;

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current,
    "car": car->slug.current,
  }
`;

const linkFields = /* groq */ `
  link {
      ...,
      ${linkReference}
      }
`;

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    blackBackground,
    heading,
    subheading,
    seo,
    redirect,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ${linkFields},
      },
      _type == "carModelComponent" => {
        carModels[]{
          ...,
          exploreLink {
            text,
            link -> {
              _id,
              title,
              "slug": slug.current
            },
            externalLink{
              type,
              linkType,
              openInNewTab,
              href,
              path,
              "car": car->{
                _id,
                title,
                "slug": slug.current
              },
              "page": page->{
                _id,
                title,
                "slug": slug.current
              }
            }
          },
            getQuoteLink{
              text,
              quoteLink{
                type,
                linkType,
                openInNewTab,
                href,
                path,
                "car": car->{
                  _id,
                  title,
                  "slug": slug.current
                },
                "page": page->{
                  _id,
                  title,
                  "slug": slug.current
                }
              } 
            },
            testDriveLink{
              text,
              drivelink{
                type,
                linkType,
                openInNewTab,
                href,
                path,
                "car": car->{
                  _id,
                  title,
                  "slug": slug.current
                },
                "page": page->{
                  _id,
                  title,
                  "slug": slug.current
                }
              } 
            }
        }
      },
       _type == "contactFormSection" => {
          ...,
          form{
          ...,
          link -> {
              _id,
              title,
              "slug": slug.current
            }
          }
      },
      _type == "optOutForm" => {
          
          ...,
          link -> {
              _id,
              title,
              "slug": slug.current
            }
      },
      _type == "brochureDownloadFormSection" => {
          ...,
          form{
          ...,
          link -> {
              _id,
              title,
              "slug": slug.current
            }
          }
      },
      _type == "requestQuoteForm" => {
          ...,
          link -> {
              _id,
              title,
              "slug": slug.current
            }
      },
      _type == "fleetContactFormSection" => {
          ...,
          form{
          ...,
          link -> {
              _id,
              title,
              "slug": slug.current
            }
          }
      },
      _type == "serviceBookingForm" => {
          ...,
          link -> {
              _id,
              title,
              "slug": slug.current
          }
      },
      _type == "customerLookup" => {
          ...,
          form{
          ...,
          termsAndConditionLink -> {
              _id,
              title,
              "slug": slug.current
          }
}
      },
      _type == "bannerCarousel" => {
        ...,
        link -> {
              _id,
              title,
              "slug": slug.current
            }
      },
      _type == "thankyouRichText" => {
        ...,
        callToActionButton{
        ...,
        link { _type, linkType, openInNewTab, href, path, "page": page->{ _id, title, "slug": slug.current } },
         }
      },

      
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
      _type == "heroVideoComponent" => {
        video {
          asset-> {
            playbackId,
            assetId,
            filename
          }
        }
      },
      _type == "appointmentBooked" => {
          ...,
          exploreButton {
            ...,
          ${linkFields},
        },
        bookButton {
            ...,
          ${linkFields},
        }
      },
      _type == "appointmentError" => {
          ...,
          tryAgainLink -> {
              _id,
              title,
              "slug": slug.current
            }
      },
      _type == "customerDetails" => {
          ...,
          restartButtonLink -> {
              _id,
              title,
              "slug": slug.current
            }
      },
      _type == "imagesAndVideosSection" => {
        ...,
        modelGalleryList[]{
          ...,
        }
      }
    }
  }
`);



export const getNewsDetailQuery = defineQuery(`
  *[_type == 'news' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    blackBackground,
    thumbnail,
    seo,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ${linkFields},
      },
      _type == "carModelComponent" => {
        carModels[]{
          ...,
          exploreLink {
          text,
          link -> {
              _id,
              title,
              "slug": slug.current
          }
        }
        }
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
    },
  }
`);

export const getHomePageQuery = () => {
  return defineQuery(`
    *[_type == "page" && slug.current == "home"][0]{
      _id,
      _type,
      name,
      slug,
      heading,
      subheading,
      seo,
      "pageBuilder": pageBuilder[]{
        ...,
        _type == "callToAction" => {
          ...,
          ${linkFields},
        },
        _type == "listCars" => {
        cars[]{
          ...,
          exploreLink {
          text,
          link -> {
              _id,
              title,
              "slug": slug.current
          }
        }
        }
      },
      _type == "bannerCarousel" => {
        slides[]{
          ...,
          link -> {
              _id,
              title,
              "slug": slug.current
            }
        }
      },
      },
    }
  `);
};



