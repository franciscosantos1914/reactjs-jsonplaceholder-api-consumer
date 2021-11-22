import React from "react";
import Top from ".";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import moment from "moment";

afterEach(cleanup);

describe("Testar o componente Top", () => {
  it("deve renderizar o texto do PersonalContainer no componente Top", () => {
    const { getByTestId } = render(<Top />);
    expect(getByTestId("postComments")).toHaveTextContent(
      "Posts e Comentários"
    );
  });

  it("deve renderizar corretamente a data do PersonalContainer com classe today no componente Top", () => {
    const { getByTestId } = render(<Top />);
    expect(getByTestId("todayTop")).toHaveTextContent(
      "Hoje | Dia " + moment(Date.now()).format("DD")
    );
  });
});
