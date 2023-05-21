import { TypeOfOutput } from '../types';

import type { EditorDocsItemProps } from '../types';

export const EditorDocsRoot = ({
  fieldsType,
  handleClick,
}: EditorDocsItemProps) => {
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

      <span>query: </span>
      <button
        onClick={() =>
          handleClick({
            typeOfOutput: TypeOfOutput.TYPE,
            name: fieldsType.name,
          })
        }
      >
        {fieldsType.name}
      </button>
    </div>
  );
};
