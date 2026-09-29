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



const linkFields = /* groq */ `
  link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
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
        link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  },
      },
      _type == "whatWeMake" => {
        ...,
        cta {
          ...,
          link {
            ...,
            _type == "link" => {
              "page": page->slug.current,
              "post": post->slug.current,
              "car": car->slug.current
            }
          }
        },
        productLinesCategories[]{
          ...,
          productLine->{
            title,
            eyebrow,
            mainHeading,
            subtitle,
            description,
            bottomTags,
            "heroImage": heroImage.asset->url
          },
          productFamilies[]->{
            title,
            eyebrow,
            mainHeading,
            subtitle,
            description,
            bottomTags,
            "slug": slug.current,
            "productLineSlug": productLine->slug.current,
            "thumbnailImage": thumbnailImage.asset->url,
            "heroImage": heroImage.asset->url
          }
        }
      },
      _type == "homeHero" => {
        ...,
        "backgroundImage": backgroundImage.asset->url,
        "thumbnailImage": thumbnailImage.asset->url,
        primaryCta {
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
        },
        secondaryCta {
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
        }
      },
      _type == "manufacturingPartnership" => {
        ...,
        "blueprintImage": blueprintImage.asset->url,
        buttonText {
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
        }
      },
      _type == "ourProcess" => {
        ...,
        processSteps[]{
          ...,
          "img": img.asset->url
        },
        footerValues[]{
          ...,
          "icon": icon.asset->url
        },
        ctaButton {
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
        }
      },
      _type == "ourImpact" => {
        ...,
        "mapImage": mapImage.asset->url,
        "rightImage": rightImage.asset->url,
        "brandLogos": brandLogos[].asset->url,
        ctaButton {
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
        }
      },
      _type == "ourCommitment" => {
        ...,
        features[]{
          ...,
          "icon": icon.asset->url
        },
        gallery[]{
          ...,
          "image": image.asset->url
        },
        ctaButton {
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
        }
      },
      _type == "productBanner" => {
          ...,
          "image": image.asset->url,
          ctaButton {
            ...,
            link {
              ...,
              _type == "link" => {
                "page": page->slug.current,
                "post": post->slug.current,
                "car": car->slug.current,
              }
            }
          }
        },
        _type == "categoryBlock" => {
          ...,
          "image": image.asset->url,
          ctaButton {
            ...,
            link {
              ...,
              _type == "link" => {
                "page": page->slug.current,
                "post": post->slug.current,
                "car": car->slug.current,
              }
            }
          }
        },
        _type == "categoryIndex" => {
          ...,
          categories[]{
            ...,
            categoryReference->{
              title,
              "slug": slug.current
            }
          }
        },
        _type == "qualityProgress" => {
          ...,
          photos[]{
            ...,
            "image": image.asset->url
          }
        },
        _type == "betterProducts" => {
        ...,
        "rightImage": rightImage.asset->url,
        features[]{
          ...,
          "icon": icon.asset->url
        },
        ctaButton {
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
        }
      },
      _type == "contactForm" => {
        ...,
        features[]{
          ...,
          "icon": icon.asset->url
        }
      },
      _type == "footerBlock" => {
        ...,
        linkColumns[]{
          ...,
          links[]{
            ...,
            link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
          }
        },
        bottomLinks[]{
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
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
            _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
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
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  },
        },
        bookButton {
            ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  },
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
        link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  },
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
            _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
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
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  },
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
      },      _type == "bannerCarousel" => {
        slides[]{
          ...,
          link -> {
              _id,
              title,
              "slug": slug.current
            }
        }
      },
      _type == "whatWeMake" => {
        ...,
        cta {
          ...,
          link {
            ...,
            _type == "link" => {
              "page": page->slug.current,
              "post": post->slug.current,
              "car": car->slug.current
            }
          }
        },
        productLinesCategories[]{
          ...,
          productLine->{
            title,
            eyebrow,
            mainHeading,
            subtitle,
            description,
            bottomTags,
            "heroImage": heroImage.asset->url
          },
          productFamilies[]->{
            title,
            eyebrow,
            mainHeading,
            subtitle,
            description,
            bottomTags,
            "slug": slug.current,
            "productLineSlug": productLine->slug.current,
            "thumbnailImage": thumbnailImage.asset->url,
            "heroImage": heroImage.asset->url
          }
        }
      },
      _type == "homeHero" => {
        ...,
        "backgroundImage": backgroundImage.asset->url,
        "thumbnailImage": thumbnailImage.asset->url,
        primaryCta {
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
        },
        secondaryCta {
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
        }
      },
      _type == "manufacturingPartnership" => {
        ...,
        "blueprintImage": blueprintImage.asset->url,
        buttonText {
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
        }
      },
      _type == "ourProcess" => {
        ...,
        processSteps[]{
          ...,
          "img": img.asset->url
        },
        footerValues[]{
          ...,
          "icon": icon.asset->url
        },
        ctaButton {
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
        }
      },
      _type == "ourImpact" => {
        ...,
        "mapImage": mapImage.asset->url,
        "rightImage": rightImage.asset->url,
        "brandLogos": brandLogos[].asset->url,
        ctaButton {
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
        }
      },
      _type == "ourCommitment" => {
        ...,
        features[]{
          ...,
          "icon": icon.asset->url
        },
        gallery[]{
          ...,
          "image": image.asset->url
        },
        ctaButton {
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
        }
      },
      _type == "productBanner" => {
          ...,
          "image": image.asset->url
        },
        _type == "betterProducts" => {
        ...,
        "rightImage": rightImage.asset->url,
        features[]{
          ...,
          "icon": icon.asset->url
        },
        ctaButton {
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
        }
      },
      _type == "contactForm" => {
        ...,
        features[]{
          ...,
          "icon": icon.asset->url
        }
      },
      _type == "footerBlock" => {
        ...,
        linkColumns[]{
          ...,
          links[]{
            ...,
            link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
          }
        },
        bottomLinks[]{
          ...,
          link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
        }
      }      },
    }
  `);
};



// ==========================================
// E-COMMERCE CATALOGUE QUERIES
// ==========================================

// 1. Get Catalogue
export const catalogueQuery = defineQuery(`
  *[_type == "catalogue"][0] {
    ...,
    "productLines": productLines[]->{
      title,
      slug,
      eyebrow,
      thumbnailImage,
      description,
      "heroImage": heroImage.asset->url
    },
    "filterCategory": filterCategory[]->{title, slug},
    "filterProductType": filterProductType[]->{title, slug},
    "filterGenderFit": filterGenderFit[]->{title, slug},
    "filterFabricDescription": filterFabricDescription[]->{title, slug},
    "filterConstruction": filterConstruction[]->{title, slug}
  }
`)

// 2. Get all Product Lines
export const allProductLinesQuery = defineQuery(`
  *[_type == "productLine"] | order(title asc) {
    _id,
    title,
    slug,
    thumbnailImage,
    eyebrow,
    "heroImage": heroImage.asset->url
  }
`)

// 3. Get Product Line by slug
export const productLineBySlugQuery = defineQuery(`
  *[_type == "productLine" && slug.current == $slug][0] {
    ...,
    "productFamilies": *[_type == "productFamily" && references(^._id)] {
      _id,
      title,
      slug,
      thumbnailImage,
      eyebrow,
      description,
      "heroImage": heroImage.asset->url
    },
    "filterType": filterType[]->{title, slug},
    "filterWire": filterWire[]->{title, slug},
    "filterPadding": filterPadding[]->{title, slug},
    "filterSupport": filterSupport[]->{title, slug},
    "filterFabric": filterFabric[]->{title, slug}
  }
`)

// 4. Get Product Family by slug
export const productFamilyBySlugQuery = defineQuery(`
  *[_type == "productFamily" && slug.current == $slug][0] {
    ...,
    "productLine": productLine->{
      title,
      slug,
      "filterType": filterType[]->{title, slug},
      "filterWire": filterWire[]->{title, slug},
      "filterPadding": filterPadding[]->{title, slug},
      "filterSupport": filterSupport[]->{title, slug},
      "filterFabric": filterFabric[]->{title, slug}
    },
    "products": products[]->{
      _id,
      title,
      slug,
      productCode,
      "mainImage": mainImage.asset->url
    }
  }
`)

// 5. Get Products by Product Family
export const productsByFamilyQuery = defineQuery(`
  *[_type == "product" 
    && productFamily->slug.current == $familySlug
    && (!defined($categorySlug) || category->slug.current == $categorySlug)
    && (!defined($wireSlug) || wire->slug.current == $wireSlug)
    && (!defined($supportSlug) || support->slug.current == $supportSlug)
  ] | order(title asc) {
    _id,
    title,
    slug,
    "thumbnailImage": thumbnailImage.asset->url,
    productCode,
    shortDescription,
    "mainImage": mainImage.asset->url, "productFamily": productFamily->{slug}, "productLine": productLine->{slug},
    category->{title, slug},
    productType->{title, slug},
    wire->{title, slug},
    padding->{title, slug},
    support->{title, slug}
  }
`)

// 6. Get Products by Product Line
export const productsByLineQuery = defineQuery(`
  *[_type == "product" && productLine->slug.current == $lineSlug] | order(title asc) {
    _id,
    title,
    slug,
    productCode,
    shortDescription,
    "mainImage": mainImage.asset->url, "productFamily": productFamily->{slug}, "productLine": productLine->{slug},
    category->{title, slug},
    productType->{title, slug},
    wire->{title, slug},
    padding->{title, slug},
    support->{title, slug}
  }
`)

// 7. Get products with filter attributes (Dynamic filtering Example)
export const filteredProductsQuery = defineQuery(`
  *[_type == "product" 
    && (!defined($categorySlug) || category->slug.current == $categorySlug)
    && (!defined($wireSlug) || wire->slug.current == $wireSlug)
    && (!defined($supportSlug) || support->slug.current == $supportSlug)
  ] | order(title asc) {
    _id,
    title,
    slug,
    "thumbnailImage": thumbnailImage.asset->url,
    productCode,
    "mainImage": mainImage.asset->url, "productFamily": productFamily->{slug}, "productLine": productLine->{slug},
    category->{title, slug},
    wire->{title, slug},
    support->{title, slug}
  }
`)



export const headerQuery = defineQuery(`*[_type == "fragment" && type == "Header"][0]{
  header {
    ...,
    "logo": logo.asset->url,
    "logoText": logoText.asset->url,
    "logoSubtext": logoSubtext.asset->url,
    primaryNavigationLeft[]{
      ...,
      link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
    },
    primaryNavigationRight[]{
      ...,
      link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
    },
    ctaButton {
      ...,
      link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
    }
  }
}`);

export const footerQuery = defineQuery(`*[_type == "fragment" && type == "Footer"][0]{
  footer {
    ...,
    linkColumns[]{
      ...,
      links[]{
        ...,
        link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
      }
    },
    bottomLinks[]{
      ...,
      link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current,
        "car": car->slug.current,
      }
  }
    }
  }
}`);
