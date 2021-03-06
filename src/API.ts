/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateFactualInput = {
  ds: number,
  version: string,
  factual: string,
  factualTokenized: Array< string | null >,
};

export type ModelFactualConditionInput = {
  factual?: ModelStringInput | null,
  factualTokenized?: ModelStringInput | null,
  and?: Array< ModelFactualConditionInput | null > | null,
  or?: Array< ModelFactualConditionInput | null > | null,
  not?: ModelFactualConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateFactualInput = {
  ds: number,
  version: string,
  factual?: string | null,
  factualTokenized?: Array< string | null > | null,
};

export type DeleteFactualInput = {
  ds: number,
  version: string,
};

export type CreateGATTInput = {
  article: string,
  version: string,
  content: string,
  contentTokenized: Array< string | null >,
};

export type ModelGATTConditionInput = {
  content?: ModelStringInput | null,
  contentTokenized?: ModelStringInput | null,
  and?: Array< ModelGATTConditionInput | null > | null,
  or?: Array< ModelGATTConditionInput | null > | null,
  not?: ModelGATTConditionInput | null,
};

export type UpdateGATTInput = {
  article: string,
  version: string,
  content?: string | null,
  contentTokenized?: Array< string | null > | null,
};

export type DeleteGATTInput = {
  article: string,
  version: string,
};

export type CreateLabelInput = {
  ds_art: string,
  version: string,
  cited: boolean,
  split?: string | null,
};

export type ModelLabelConditionInput = {
  cited?: ModelBooleanInput | null,
  split?: ModelStringInput | null,
  and?: Array< ModelLabelConditionInput | null > | null,
  or?: Array< ModelLabelConditionInput | null > | null,
  not?: ModelLabelConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateLabelInput = {
  ds_art: string,
  version: string,
  cited?: boolean | null,
  split?: string | null,
};

export type DeleteLabelInput = {
  ds_art: string,
  version: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelFactualFilterInput = {
  ds?: ModelIntInput | null,
  version?: ModelStringInput | null,
  factual?: ModelStringInput | null,
  factualTokenized?: ModelStringInput | null,
  and?: Array< ModelFactualFilterInput | null > | null,
  or?: Array< ModelFactualFilterInput | null > | null,
  not?: ModelFactualFilterInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelGATTFilterInput = {
  article?: ModelStringInput | null,
  version?: ModelStringInput | null,
  content?: ModelStringInput | null,
  contentTokenized?: ModelStringInput | null,
  and?: Array< ModelGATTFilterInput | null > | null,
  or?: Array< ModelGATTFilterInput | null > | null,
  not?: ModelGATTFilterInput | null,
};

export type ModelLabelFilterInput = {
  ds_art?: ModelStringInput | null,
  version?: ModelStringInput | null,
  cited?: ModelBooleanInput | null,
  split?: ModelStringInput | null,
  and?: Array< ModelLabelFilterInput | null > | null,
  or?: Array< ModelLabelFilterInput | null > | null,
  not?: ModelLabelFilterInput | null,
};

export type CreateFactualMutationVariables = {
  input: CreateFactualInput,
  condition?: ModelFactualConditionInput | null,
};

export type CreateFactualMutation = {
  createFactual:  {
    __typename: "Factual",
    ds: number,
    version: string,
    factual: string,
    factualTokenized: Array< string | null >,
  } | null,
};

export type UpdateFactualMutationVariables = {
  input: UpdateFactualInput,
  condition?: ModelFactualConditionInput | null,
};

export type UpdateFactualMutation = {
  updateFactual:  {
    __typename: "Factual",
    ds: number,
    version: string,
    factual: string,
    factualTokenized: Array< string | null >,
  } | null,
};

export type DeleteFactualMutationVariables = {
  input: DeleteFactualInput,
  condition?: ModelFactualConditionInput | null,
};

export type DeleteFactualMutation = {
  deleteFactual:  {
    __typename: "Factual",
    ds: number,
    version: string,
    factual: string,
    factualTokenized: Array< string | null >,
  } | null,
};

export type CreateGattMutationVariables = {
  input: CreateGATTInput,
  condition?: ModelGATTConditionInput | null,
};

export type CreateGattMutation = {
  createGATT:  {
    __typename: "GATT",
    article: string,
    version: string,
    content: string,
    contentTokenized: Array< string | null >,
  } | null,
};

export type UpdateGattMutationVariables = {
  input: UpdateGATTInput,
  condition?: ModelGATTConditionInput | null,
};

export type UpdateGattMutation = {
  updateGATT:  {
    __typename: "GATT",
    article: string,
    version: string,
    content: string,
    contentTokenized: Array< string | null >,
  } | null,
};

export type DeleteGattMutationVariables = {
  input: DeleteGATTInput,
  condition?: ModelGATTConditionInput | null,
};

export type DeleteGattMutation = {
  deleteGATT:  {
    __typename: "GATT",
    article: string,
    version: string,
    content: string,
    contentTokenized: Array< string | null >,
  } | null,
};

export type CreateLabelMutationVariables = {
  input: CreateLabelInput,
  condition?: ModelLabelConditionInput | null,
};

export type CreateLabelMutation = {
  createLabel:  {
    __typename: "Label",
    ds_art: string,
    version: string,
    cited: boolean,
    split: string | null,
  } | null,
};

export type UpdateLabelMutationVariables = {
  input: UpdateLabelInput,
  condition?: ModelLabelConditionInput | null,
};

export type UpdateLabelMutation = {
  updateLabel:  {
    __typename: "Label",
    ds_art: string,
    version: string,
    cited: boolean,
    split: string | null,
  } | null,
};

export type DeleteLabelMutationVariables = {
  input: DeleteLabelInput,
  condition?: ModelLabelConditionInput | null,
};

export type DeleteLabelMutation = {
  deleteLabel:  {
    __typename: "Label",
    ds_art: string,
    version: string,
    cited: boolean,
    split: string | null,
  } | null,
};

export type GetFactualQueryVariables = {
  ds: number,
  version: string,
};

export type GetFactualQuery = {
  getFactual:  {
    __typename: "Factual",
    ds: number,
    version: string,
    factual: string,
    factualTokenized: Array< string | null >,
  } | null,
};

export type ListFactualsQueryVariables = {
  ds?: number | null,
  version?: ModelStringKeyConditionInput | null,
  filter?: ModelFactualFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListFactualsQuery = {
  listFactuals:  {
    __typename: "ModelFactualConnection",
    items:  Array< {
      __typename: "Factual",
      ds: number,
      version: string,
      factual: string,
      factualTokenized: Array< string | null >,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGattQueryVariables = {
  article: string,
  version: string,
};

export type GetGattQuery = {
  getGATT:  {
    __typename: "GATT",
    article: string,
    version: string,
    content: string,
    contentTokenized: Array< string | null >,
  } | null,
};

export type ListGatTsQueryVariables = {
  article?: string | null,
  version?: ModelStringKeyConditionInput | null,
  filter?: ModelGATTFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGatTsQuery = {
  listGATTs:  {
    __typename: "ModelGATTConnection",
    items:  Array< {
      __typename: "GATT",
      article: string,
      version: string,
      content: string,
      contentTokenized: Array< string | null >,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetLabelQueryVariables = {
  ds_art: string,
  version: string,
};

export type GetLabelQuery = {
  getLabel:  {
    __typename: "Label",
    ds_art: string,
    version: string,
    cited: boolean,
    split: string | null,
  } | null,
};

export type ListLabelsQueryVariables = {
  ds_art?: string | null,
  version?: ModelStringKeyConditionInput | null,
  filter?: ModelLabelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLabelsQuery = {
  listLabels:  {
    __typename: "ModelLabelConnection",
    items:  Array< {
      __typename: "Label",
      ds_art: string,
      version: string,
      cited: boolean,
      split: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateFactualSubscription = {
  onCreateFactual:  {
    __typename: "Factual",
    ds: number,
    version: string,
    factual: string,
    factualTokenized: Array< string | null >,
  } | null,
};

export type OnUpdateFactualSubscription = {
  onUpdateFactual:  {
    __typename: "Factual",
    ds: number,
    version: string,
    factual: string,
    factualTokenized: Array< string | null >,
  } | null,
};

export type OnDeleteFactualSubscription = {
  onDeleteFactual:  {
    __typename: "Factual",
    ds: number,
    version: string,
    factual: string,
    factualTokenized: Array< string | null >,
  } | null,
};

export type OnCreateGattSubscription = {
  onCreateGATT:  {
    __typename: "GATT",
    article: string,
    version: string,
    content: string,
    contentTokenized: Array< string | null >,
  } | null,
};

export type OnUpdateGattSubscription = {
  onUpdateGATT:  {
    __typename: "GATT",
    article: string,
    version: string,
    content: string,
    contentTokenized: Array< string | null >,
  } | null,
};

export type OnDeleteGattSubscription = {
  onDeleteGATT:  {
    __typename: "GATT",
    article: string,
    version: string,
    content: string,
    contentTokenized: Array< string | null >,
  } | null,
};

export type OnCreateLabelSubscription = {
  onCreateLabel:  {
    __typename: "Label",
    ds_art: string,
    version: string,
    cited: boolean,
    split: string | null,
  } | null,
};

export type OnUpdateLabelSubscription = {
  onUpdateLabel:  {
    __typename: "Label",
    ds_art: string,
    version: string,
    cited: boolean,
    split: string | null,
  } | null,
};

export type OnDeleteLabelSubscription = {
  onDeleteLabel:  {
    __typename: "Label",
    ds_art: string,
    version: string,
    cited: boolean,
    split: string | null,
  } | null,
};
