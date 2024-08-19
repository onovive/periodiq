import client from "../client";

export async function getPageData() {
  const content = await client.fetch(
    `{
      "home": *[_type == "home"][0]{
        ...,
        banner{
          ...,
          "imageUrl1": iamge1.asset->url,
          "imageUrl2": iamge2.asset->url,
          "imageUrl3": iamge3.asset->url,
          "imageUrl4": iamge4.asset->url,
          "imageUrl5": iamge5.asset->url,
          "imageUrl6": iamge6.asset->url,
          "imageUrl7": iamge7.asset->url,
        },
        industriesSection{
          ...,
          industries[]->{
            ...,
            'imageUrl': image.asset->url
          },
        },
        servicesSection{
          ...,
          services[]->,
        },
        jobsSection{
          ...,
          jobs[]->,
        },
        technologiesSection{
          ...,
          techStack[]{
            ...,
            tech[]->{
              ...,
              'imageUrl': image.asset->url
            },
          },
        },
        methodologySection{
          ...,
          'imageUrl': image.asset->url
        },
        aboutSection{
          ...,
          card[]{
            ...,
            'imageUrl': image.asset->url
          }
        },
        locationSection{
          ...,
        },
        contactSection{
          ...,
          cards[]{
            ...,
            'imageUrl': image.asset->url
          }
        }
      },
      "socialMedia": *[_type == "socialMedia"]{
        ...,
        list[]{
        ...,
        'logoUrl': logo.asset->url
        }
      },
      "header": *[_type == "header"]{
        ...,
        'logoUrl': logo.asset->url
        
      }
    }`,
    "",
    { next: { revalidate: 60 } }
  );

  return content;
}
