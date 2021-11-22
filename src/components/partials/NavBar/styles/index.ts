import styled from "styled-components";
import { PoweroffOutlined, CloudSyncOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: #28262e;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Row = styled.div`
  width: 100%;
  height: inherit;
  &.power-off-row {
    display: flex;
    justify-content: end;
    padding-right: 10%;
    align-items: center;
  }
  &.logo-and-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13%;
  }
`;

export const IconPowerOff = styled(PoweroffOutlined)`
  color: #666360;
  font-size: 26px;
  cursor: pointer;
  transition: all 300ms ease;
  &:hover {
    color: #ddd;
  }
`;

export const Logo = styled(CloudSyncOutlined)`
  color: #fff;
  font-size: 50px;
  cursor: pointer;
  transition: all 300ms ease;
  &:hover {
    color: #ddd;
  }
`;

export const UserDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const UserAvatar = styled(Avatar)`
  background: #666360;
  transition: all 300ms ease;
  cursor: pointer;
  &:hover {
    background: #999;
  }
`;

export const TextDivHeader = styled.div`
  & .gray-text {
    color: #999591;
    font-weight: bold;
  }
  color: #ff9000;
  font-weight: bolder;
`;
