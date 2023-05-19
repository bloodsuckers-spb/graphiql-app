import { useAppSelector } from 'shared/hooks';

export const EditorApiDocs = () => {
  const schema = useAppSelector((state) => state.editorReducer.schema);

  // console.log(schema);

  return <div>EditorApiDocs</div>;
};
