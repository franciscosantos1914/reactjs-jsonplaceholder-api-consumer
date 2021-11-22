import moment from "moment";
import React from "react";

import { PersonalContainer } from "../Home/styles";

const Top: React.FC = () => {
  return (
    <>
      <PersonalContainer data-testid="top">
        <PersonalContainer className="post-comments" data-testid="postComments">
          Posts e Comentários
        </PersonalContainer>
        <PersonalContainer className="today" data-testid="todayTop">
          Hoje | Dia {moment(Date.now()).format("DD")}
        </PersonalContainer>
      </PersonalContainer>
    </>
  );
};

export default Top;
