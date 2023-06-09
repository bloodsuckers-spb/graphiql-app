import styles from './EditorDocsNonRoot.module.scss';

import { SelectDataProps, TypeOfOutput } from '../types';

import type { CurrentDocData } from '../types';

export type Props = {
  selectData: (data: SelectDataProps) => void;
} & CurrentDocData;

export const EditorDocsNonRoot = ({
  name,
  description,
  fields,
  selectData,
  type,
  args,
}: Props) => {
  return !type ? (
    <div className={styles.docsFields}>
      <div>
        <h2 className={styles.docTypeTitle}>{name}</h2>
        <p className={styles.docTypeDescription}>{description}</p>
      </div>
      <ul>
        {fields?.map(([fieldName, { type, args }]) => {
          return (
            <li
              className={styles.listItem}
              key={fieldName}
            >
              <button
                className={styles.docTypeName}
                onClick={() =>
                  selectData({
                    name: fieldName,
                    typeOfOutput: TypeOfOutput.NAME,
                    type,
                    args: args,
                  })
                }
              >
                {fieldName}
              </button>

              <span className={styles.docTypeArgs}>
                {Array.isArray(args) && args.length ? `(` : null}
                {args?.map(({ name, type }, index) => (
                  <span key={name}>
                    <span>{name}: </span>
                    <button
                      onClick={() =>
                        selectData({
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
                {Array.isArray(args) && args.length ? `): ` : ''}
              </span>

              <button
                onClick={() =>
                  selectData({
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
    <div className={styles.docsType}>
      <h2 className={styles.docTypeTitle}>{name}</h2>
      <h3 className={styles.docTypeSubTitle}>Type</h3>
      <button
        onClick={() =>
          selectData({
            typeOfOutput: TypeOfOutput.TYPE,
            name: type,
          })
        }
      >
        {type}
      </button>
      {args?.length ? (
        <h3 className={styles.docTypeSubTitle}>Arguments</h3>
      ) : null}
      <div>
        {args?.map(({ name, type }) => (
          <div
            className={styles.docTypeName}
            key={name}
          >
            {`${name}: `}
            <button
              onClick={() =>
                selectData({
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
