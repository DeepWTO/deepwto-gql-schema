// tslint:disable
// this is an auto generated file. This will be overwritten

export const createFactual = `mutation CreateFactual(
  $input: CreateFactualInput!
  $condition: ModelFactualConditionInput
) {
  createFactual(input: $input, condition: $condition) {
    ds
    version
    factual
  }
}
`;
export const updateFactual = `mutation UpdateFactual(
  $input: UpdateFactualInput!
  $condition: ModelFactualConditionInput
) {
  updateFactual(input: $input, condition: $condition) {
    ds
    version
    factual
  }
}
`;
export const deleteFactual = `mutation DeleteFactual(
  $input: DeleteFactualInput!
  $condition: ModelFactualConditionInput
) {
  deleteFactual(input: $input, condition: $condition) {
    ds
    version
    factual
  }
}
`;
