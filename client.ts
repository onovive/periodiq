// client.ts
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "pkwqd9sd", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  token: "skU2C0uTyUtgFF0SAuzY3vtt9U31skGcU0xXyK5btspVsxZtEbe1VbqeiyI9QEWCNdvwIn2l9Xl2eLjyeyCuklk1aj5TNIdrZJenBSeClZTZ6N4i9OocHYbHmusQIhVQMgNjRP3yVrskj6zYwSlVDrYrXhdrguWPOBoXzWg2I0t5OMEYrhOl",
});
