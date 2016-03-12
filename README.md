# INSEE

[![Build Status](https://travis-ci.org/92bondstreet/insee.svg?branch=master)](https://travis-ci.org/92bondstreet/insee)

> Get INSEE code from zipcode and city name

## ... Work in progress ...

## API

### DIY

http://public.opendatasoft.com/explore/dataset/correspondance-code-insee-code-postal/api/?flg=fr

### Example

```sh
http://public.opendatasoft.com/api/records/1.0/search/?dataset=correspondance-code-insee-code-postal&q=YOUR-QUERY-HERE&facet=nom_dept&facet=nom_region&facet=statut
```

## Usage

```js
let insee = require('insee');
let zipcode = '92380';
let city = 'garches';

insee(zipcode, city, (err, code) => {
  console.log(code);
})

//92033
```

## Source

[Correspondance Code INSEE - Code Postal](http://public.opendatasoft.com/explore/dataset/correspondance-code-insee-code-postal/?flg=fr)

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
