import React, { useEffect, useState } from "react";
import { stateToHTML } from 'draft-js-export-html';
import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";

interface IFdmEditorProps {
  editorRef?: any;
}

export function FdmEditor(props: IFdmEditorProps) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const { editorRef } = props;
  useEffect(() => {
    if (editorRef) {
      editorRef.current = {
        getHtmlContent() {
          return stateToHTML(editorState.getCurrentContent());
        }
      }
    }
  }, [editorRef, editorState]);

  return (
    <Editor wrapperClassName="border" editorClassName="px-4" editorState={editorState} onEditorStateChange={setEditorState} />
  );
}
