import React from 'react';

interface AnchorProps {
  label: string;
  anchor: string;
}

const Anchor: React.FC<AnchorProps> = ({label, anchor  }) => {
  return (
  <div id={anchor} className="anchor">
    <span>[ {label} ]</span>
  </div> 
);
};

export default Anchor;
