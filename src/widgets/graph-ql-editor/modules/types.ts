export enum TypeOfOutput {
  ROOT = 'root',
  TYPE = 'type',
  NAME = 'name',
}

export type CurrentDocData = {
  typeOfOutput: TypeOfOutput;
  name: string;
  description: string;
  type?: string;
  fields?: Array<[string, FieldsData]>;
  args?: FieldArgs[];
};

export type FieldsData = {
  args: FieldArgs[];
  name: string;
  type: string;
  description: string;
};

export type FieldArgs = {
  name: string;
  type: string;
};

export type SelectDataProps = Omit<CurrentDocData, 'description' | 'fields'>;
