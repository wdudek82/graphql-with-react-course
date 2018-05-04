### GraphQL with React Course

### Run express server
* npm run dev

### Run json-server
* npm run json:server

### GraphQL fragments

~~~~
query findCompany {
  apple: company (id: "1") {
    ...companyDetails
    users {
      id
      firstName
    }
  }
  ms: company (id: "3") {
    ...companyDetails
    users {
      id
      firstName
    }
  }
}

fragment companyDetails on Company {
  id
  name
  description
}
~~~~