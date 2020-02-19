# deepwto-stream
DeepWTO data streaming API designed with { GraphQL, Amplify, AWS DynamoDB, AppSync}

## Goals
- [ ] Design Database Schema
- [ ] Write initial version of DeepWTO Data to AWS DynamoDB
- [ ] Versioning of AWS DynamoDB

## DB Schema
  - GraphQL schema is built using `AWS Amplify CLI` 
  - The schema is published to `AWS DynamoDB` 
  - The schema is cloud-accessible via `AWS AppSync` API Endpoint

Check the schema :
https://github.com/DeepWTO/deepwto-stream/blob/master/amplify/backend/api/deepwtoAPI/schema.graphql

## API Key
Currently we limits the access to the DB with `API Key`. Request `syyun@snu.ac.kr` to get access to the DynamoDB w. API Key

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
With `@key` directive, we allocate `ds` as the partition-key and `version` as the sort-key. Since we can allocate multiple sort-key-varaint over one-partition key, `sort-key` can serve for the version control functionality. 

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
