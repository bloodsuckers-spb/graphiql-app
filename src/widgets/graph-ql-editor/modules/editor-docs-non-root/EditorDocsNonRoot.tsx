import { EditorDocsItemProps, TypeOfOutput } from '../types';

export const EditorDocsNonRoot = ({
  name,
  description,
  fields,
  handleClick,
  type,
  args,
}: EditorDocsItemProps) => {
  return !type ? (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Fields</h3>
      <ul>
        {fields?.map(([fieldName, { type, args }]) => {
          return (
            <li key={fieldName}>
              <button
                onClick={() =>
                  handleClick({ name: '', typeOfOutput: TypeOfOutput.NAME })
                }
              >
                {fieldName}
              </button>
              (
              {args.map(({ name, type }) => (
                <span key={name}>
                  <span>{name}: </span>
                  <button
                    onClick={() =>
                      handleClick({
                        name: type,
                        typeOfOutput: TypeOfOutput.TYPE,
                      })
                    }
                  >
                    {type}
                  </button>
                </span>
              ))}
              ):{' '}
              <button
                onClick={() =>
                  handleClick({
                    typeOfOutput: TypeOfOutput.TYPE,
                    name: type,
                  })
                }
              >
                {type}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div>
      <h2>{name}</h2>
      <h3>Type</h3>
      <button
        onClick={() =>
          handleClick({
            typeOfOutput: TypeOfOutput.TYPE,
            name: type,
          })
        }
      >
        {type}
      </button>
      <h3>Arguments</h3>
      <div>
        {args?.name}:
        <button
          onClick={() =>
            handleClick({
              typeOfOutput: TypeOfOutput.TYPE,
              name: args?.type ?? '',
            })
          }
        >
          {args?.type}
        </button>
      </div>
    </div>
  );
};
