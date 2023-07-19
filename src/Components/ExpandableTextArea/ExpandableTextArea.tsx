import React, { useState } from "react";

export interface ExpandableTextAreaProps {
  content: React.ReactNode;
  excert?: string;
  buttonLink?: {
    link: string;
    text: string;
  };
  expandable?: boolean;
}
const ExpandableTextArea = ({
  content,
  excert,
  buttonLink,
  expandable = true
}: ExpandableTextAreaProps) => {
  const [isOpen, setIsOpen] = useState(!expandable);

  return (
    <div>
      <div className="content">{isOpen ? content : excert}</div>
     {expandable &&  <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "read less..." : "read more..."}
      </button>}

      {buttonLink && <a href= {buttonLink.link}>{buttonLink.text}</a>}
    </div>
  );
};

export default ExpandableTextArea;