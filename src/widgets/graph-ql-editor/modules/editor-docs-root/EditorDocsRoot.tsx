import { OnClickProps, CurrentDocData } from '../editor-api-docs';

import { TypeOfOutput } from '../types';

type Props = {
  onClick: (data: OnClickProps) => void;
} & CurrentDocData;

export const EditorDocsRoot = ({ fieldsType, onClick }: Props) => {
  if (!fieldsType || !fieldsType.name) {
    throw new Error();
  }

  return (
    <div>
      <div>Docs</div>
      <div>
        A GraphQL schema provides a root type for each kind of operation.
      </div>
      <div>Root type</div>
      <button
        onClick={() =>
          onClick({ typeOfOutput: TypeOfOutput.TYPE, name: fieldsType.name })
        }
      >
        <span>query: </span>
        <span>{fieldsType.name}</span>
      </button>
    </div>
  );
};
