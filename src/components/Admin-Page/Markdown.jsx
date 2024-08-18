import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css"; // SimpleMDE styles

const Markdown = ({ onChange }) => {
  const [markdown, setMarkdown] = useState("");

  const handleChange = (value) => {
    setMarkdown(value);
    onChange(value); // Callback to pass the value to the parent component
  };

  return (
    <SimpleMDE
      value={markdown}
      onChange={handleChange}
      options={{
        spellChecker: true,
        autofocus: true,
        placeholder: "Enter markdown content...",
        status: false,
      }}
    />
  );
};

export default Markdown;
