import React, { useEffect, useState } from "react";
import { Col, Modal, notification, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import List from "../List";

import {
  EmptyList,
  PersonalContainer,
  PersonalLabel,
  PersonalRow,
  SearchInput,
  SubmitButton,
} from "./styles";
import http from "../../services/http";
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  of,
  pluck,
  startWith,
} from "rxjs";
import Top from "../Top";

const openNotification = () => {
  notification.open({
    message: "Ainda não há posts e comentários",
  });
};

const openNotificationError = () => {
  Modal.error({
    content: <p>Erro ao listar os posts!</p>,
  });
};

const Home: React.FC = () => {
  useEffect(() => openNotification(), []);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [list, setList] = useState<any[]>([]);

  const onSubmit = () => {
    setList([]);
    setLoading(true);
    if (search.trim() !== "") {
      of(search)
        .pipe(
          debounceTime(300),
          map((e: any) => e.trim()),
          distinctUntilChanged(),
          catchError((error, source) => {
            setLoading(false);
            openNotificationError();
            console.log(error);
            return source.pipe(startWith(""));
          })
        )
        .subscribe((e) => getPost(e));
    } else {
      setLoading(false);
      setSearch("");
      setList([]);
    }
  };

  const getPost = (search: any) => {
    return http
      .get("/posts/" + search)
      .pipe(pluck("data"), distinctUntilChanged())
      .subscribe({
        next: (val) => {
          setLoading(false);
          setSearch("");
          setList([val]);
        },
        error: (error) => {
          openNotificationError();
          setLoading(false);
        },
      });
  };

  return (
    <>
      <PersonalRow>
        <Col span={12} style={{ marginBottom: "4%" }}>
          <Top />

          <Spin tip="Carregando..." spinning={loading}>
            <PersonalContainer className="input-area">
              <PersonalLabel>Digite o ID</PersonalLabel>
              <PersonalContainer className="input-group">
                <SearchInput
                  type="number"
                  min="0"
                  placeholder="Pesquisar"
                  onInput={(e: any) => setSearch(e.target.value)}
                />
                <SubmitButton type="primary" onClick={onSubmit}>
                  <SearchOutlined />
                </SubmitButton>
              </PersonalContainer>
            </PersonalContainer>

            {list.length > 0 ? (
              list.map((el) => (
                <List key={el.userId} title={el.title} body={el.body} />
              ))
            ) : (
              <EmptyList></EmptyList>
            )}
          </Spin>
        </Col>
      </PersonalRow>
    </>
  );
};

export default Home;
