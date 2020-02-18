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
https://github.com/syyunn/deepwto-stream/blob/master/amplify/backend/api/deepwto/schema.graphql

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
With `@key` directive, we allocate `ds` as the partition-key and `version` as the sort-key(version). We can allocate multiple sort-key-varaint over one-partition key where `sort-key` works for the version control. 

