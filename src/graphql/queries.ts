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
export const getGatt = `query GetGatt($article: String!, $version: String!) {
  getGATT(article: $article, version: $version) {
    article
    version
    content
  }
}
`;
export const listGatTs = `query ListGatTs(
  $article: String
  $version: ModelStringKeyConditionInput
  $filter: ModelGATTFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listGATTs(
    article: $article
    version: $version
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      article
      version
      content
    }
    nextToken
  }
}
`;
export const getLabel = `query GetLabel($ds_art: String!, $version: String!) {
  getLabel(ds_art: $ds_art, version: $version) {
    ds_art
    version
    cited
    split
  }
}
`;
export const listLabels = `query ListLabels(
  $ds_art: String
  $version: ModelStringKeyConditionInput
  $filter: ModelLabelFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listLabels(
    ds_art: $ds_art
    version: $version
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      ds_art
      version
      cited
      split
    }
    nextToken
  }
}
`;
