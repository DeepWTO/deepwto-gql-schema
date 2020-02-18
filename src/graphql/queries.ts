// tslint:disable
// this is an auto generated file. This will be overwritten

export const getFactual = `query GetFactual($ds: Int!, $version: String!) {
  getFactual(ds: $ds, version: $version) {
    ds
    version
    factual
  }
}
`;
export const listFactuals = `query ListFactuals(
  $ds: Int
  $version: ModelStringKeyConditionInput
  $filter: ModelFactualFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listFactuals(
    ds: $ds
    version: $version
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      ds
      version
      factual
    }
    nextToken
  }
}
`;
