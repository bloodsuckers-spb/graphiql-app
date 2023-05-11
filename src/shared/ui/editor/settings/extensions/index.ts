import { autocompletion, closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle, oneDark } from '@codemirror/theme-one-dark';
import { lineNumbers } from '@codemirror/view';
import { graphql } from 'cm6-graphql';
import { remoteSchema } from 'entities/schema';

export const extensions = [
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  lineNumbers(),
  oneDark,
  syntaxHighlighting(oneDarkHighlightStyle),
  graphql(remoteSchema, {
    onShowInDocs(field, type, parentType) {
      alert(
        `Showing in docs.: Field: ${field}, Type: ${type}, ParentType: ${parentType}`
      );
    },
    onFillAllFields(view, schema, _query, cursor, token) {
      alert(`Filling all fields. Token: ${token}`);
    },
  }),
];
