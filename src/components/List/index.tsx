import React from "react";

import { PersonalContainer } from "../Home/styles";

const List: React.FC<{ title: string; body: string }> = ({ title, body }) => {
  return (
    <>
      <PersonalContainer className="content">
        <span>{title}</span>
        <hr />
        <PersonalContainer className="content-body">
          <div>{body}</div>
        </PersonalContainer>
      </PersonalContainer>
    </>
  );
};

export default List;
