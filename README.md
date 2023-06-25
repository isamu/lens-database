# Open source lens database

### Data structure

[type definition](./data/types/index.ts)

### Data

The data is in the data dir.
It is a dir of data/{maker}/{mount}.

The rf mount data is in [data/canon/rf](./data/canon/rf)

### Generate docs

Create a document under docs with the script below.

```
yarn run generate
```

## Contribute

Please update the data and create a Pull Request.
The `generate script` is run by me



Adding data is difficult if you are not an engineer.
Create a ticket with the lens name as the title in the issue and write the data in it.

```
  {
    id: "4549292156263",
    EANCode: "4549292156263",
    maker: "Canon",
    name: "RF70-200mm F2.8 L IS USM",
    mount: "RF",
    focalLength: [70, 200],
    fStop: [2.8],
    format: "Full-Frame",
    focus: ["AF"],
    hasStabilizer: true,
    hasDustMoistureResistance: true,
    filterDiameter: 77,
    weight: 1070,
    releaseDate: "2019-11-21",
    officialUrl: "https://global.canon/en/c-museum/product/rf486.html",
  }

```