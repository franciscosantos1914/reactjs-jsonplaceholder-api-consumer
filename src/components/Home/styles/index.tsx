import styled from "styled-components";
import { Calendar, Col, Row, Input, Button, Empty } from "antd";

export const BodyCalendar = styled(Calendar)`
  width: 300px;
  border: 1px solid #666360;
  background: transparent;
  border-radius: 10px;
`;

export const Container = styled(Col)`
  display: flex;
  justify-content: center;
  &.content-calendar {
    height: fit-content;
  }
`;

export const EmptyList = styled(Empty)`
  border: none;
  margin-top: 5%;
  padding: 30px 0;
  background: #3e3b47;
  border-radius: 4px;
  width: 100%;
  margin-left: -0.2%;
`;

export const SubmitButton = styled(Button)`
  background: #ff9000;
  border: none;
  cursor: pointer;
  height: 50px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`;

export const PersonalContainer = styled.div`
  &.post-comments {
    font-size: 35px;
    color: #fff;
    text-align: center;
  }
  &.today {
    color: #ff9000;
    font-weight: 500;
    text-align: center;
  }
  &.input-area {
    margin-top: 8%;
  }
  &.input-group {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
  }
  &.content {
    margin-top: 5%;
    & > span {
      color: #fff;
    }
  }
  &.content-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    & > div {
      color: #fff;
    }
  }
`;

export const PersonalRow = styled(Row)`
  display: grid;
  margin-top: 4%;
  place-items: center;
`;

export const PersonalLabel = styled.label`
  color: #999591;
  margin-bottom: 6%;
`;

export const SearchInput = styled(Input)`
  margin-top: 10px;
  background: #3e3b47;
  border-radius: 4px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  height: 50px !important;
  border: none;
  color: #fff;
  &.input-content-body {
    border-radius: 4px;
    height: 100px !important;
  }
  &:placeholder {
    color: #fff;
  }
`;
