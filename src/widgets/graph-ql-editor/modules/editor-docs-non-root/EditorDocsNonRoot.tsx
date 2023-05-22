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
      {fields?.length ? <h3>Fields</h3> : null}
      <ul>
        {fields?.map(([fieldName, { type, args }]) => {
          return (
            <li key={fieldName}>
              <button
                onClick={() =>
                  handleClick({
                    name: fieldName,
                    typeOfOutput: TypeOfOutput.NAME,
                    type,
                    args,
                  })
                }
              >
                {fieldName}
              </button>
              (
              {args?.map(({ name, type }, index) => (
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
                  {index < args.length - 1 ? ', ' : null}
                </span>
              ))}
              ):{' '}
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
      {args?.length ? <h3>Arguments</h3> : null}
      <div>
        {args?.map(({ name, type }) => (
          <div key={name}>
            {`${name}: `}
            <button
              onClick={() =>
                handleClick({
                  typeOfOutput: TypeOfOutput.TYPE,
                  name: type ?? '',
                })
              }
            >
              {type}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
