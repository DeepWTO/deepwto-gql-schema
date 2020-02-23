# deepwto-gql-schema
DeepWTO Database GraphQL Schema Built with { AWS GraphQL, Amplify CLI, DynamoDB, AppSync, CloudFront}

## Goals
- [x] Design Database Schema
- [x] Write initial version of DeepWTO Data to AWS DynamoDB
- [x] Implement versioning of AWS DynamoDB by `version` sort-key
- [ ] Add `ds`, `art` attributes to the `@type Label` to prevent the additional filtration in python 

## DB Schema
  - GraphQL schema is built by `AWS Amplify CLI/CloudFront` 
  - The schema is published to `AWS DynamoDB`
  - The schema become url-accessible via `AWS AppSync`

Check the schema :
https://github.com/DeepWTO/deepwto-gql-schema/blob/master/amplify/backend/api/deepwtoAPI/schema.graphql

## Schema Overview

```bash
type Factual
  @model
  @key(fields: ["ds", "version"]) {
  ds: Int!
  version: String!
  factual: String!
}
```
With `@key` directive, we allocate `ds` as the partition-key and `version` as the sort-key. Since we can allocate multiple sort-key-varaints over one-partition key, `sort-key` can serve as the version controller.

## Example Queries/Mutation
### To Write on DB
```bash
mutation CreateFactual {
  createFactual(
    input: 
    {ds: 1, version: "1.0.1", factual: "Korea-does-something-wrong-and.."}
  ) 
  {
    ds
    version
    factual
  }
}
```

### To Query on DB

```bash
query ListFactuals {
  listFactuals(
    ds: 1,
    version: {eq: "1.0.0"}
  ) {
    items {
      ds
      version
      factual
    }
    nextToken
  }
}
```

For more possible queries/mutations, check : https://github.com/DeepWTO/deepwto-gql-schema/tree/master/src/graphql
