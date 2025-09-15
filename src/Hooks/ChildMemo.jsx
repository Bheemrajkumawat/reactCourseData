import React, { useRef } from "react";

function ChildMemo() {
  const rendercount = useRef(0);
  console.log(rendercount);
  return (
    <div>
      <p>Nothing changed here but Ive now render:</p>
      <span>{rendercount.current++}time(s)</span>
    </div>
  );
}

export default React.memo(ChildMemo);
