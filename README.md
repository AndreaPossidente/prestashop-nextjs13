# Prestashop Next.js 13 integration through Webservice API

The project is still in development, some models and functionalities are missing and will be added soon

## Getting Started

1. Add the needed Environment Variables into **.env.local** file:
```
PS_URI=http://www.example.it
PS_API_KEY=THEPRESTASHOPWEBSERVICEKEY
```

2. Install dependencies and start your server:
```
npm install
npm run dev
```

## Models and API Calls

You can do api calls using models, here is an example:
```
import { Product } from "./Prestashop/models";

export default async function ExampleComponent() {

  // get the first 5 products from the webservice api
  const products = await Product.find({}, { limit: 5 });
  
  return (<div>
    {products.map((product) => (
      <div key={product.id}>
        <div>{product.name}</div>
        <div>{product.price_normal}</div>
        <div>{product.price_reduced}</div>
      </div>
    ))}
  </div>);
  
}
```
you can find a list of all models in prestashop 8 documentation:
<a href="https://devdocs.prestashop-project.org/8/webservice/resources/" target="_blank">https://devdocs.prestashop-project.org/8/webservice/resources/</a>
