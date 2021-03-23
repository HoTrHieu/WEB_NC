import React, { useEffect, useState } from "react";
import { stateToHTML } from 'draft-js-export-html';
import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";

interface IFdmEditorProps {
  editorRef?: any;
  html?: string;
}

export function FdmEditor(props: IFdmEditorProps) {
  const [editorState, setEditorState] = useState<any>();
  const { html } = props;
  useEffect(() => {
    if (!!html) {
      const blocksFromHTML = convertFromHTML(html || '');
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      );
      setEditorState(EditorState.createWithContent(state));
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [html]);

  const { editorRef } = props;
  useEffect(() => {
    if (editorRef) {
      editorRef.current = {
        getHtmlContent() {
          return stateToHTML(editorState?.getCurrentContent());
        }
      }
    }
  }, [editorRef, editorState]);

  return (
    <Editor wrapperClassName="border" editorClassName="px-4" editorState={editorState} onEditorStateChange={setEditorState} />
  );
}
