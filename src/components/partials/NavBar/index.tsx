import { UserOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import {
  Container,
  Row,
  Logo,
  IconPowerOff,
  UserDiv,
  UserAvatar,
  TextDivHeader,
} from "./styles";

const NavBar: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    window.close();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Container>
      <Row className="logo-and-avatar">
        <Logo />
        <UserDiv>
          <UserAvatar size={64} icon={<UserOutlined />} />
          <TextDivHeader>
            <div className="gray-text">Bem vindo,</div>
            <div>Francisco dos Santos</div>
          </TextDivHeader>
        </UserDiv>
      </Row>

      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Pretende fechar a aplicação?</p>
      </Modal>
      <Row className="power-off-row">
        <IconPowerOff onClick={showModal} />
      </Row>
    </Container>
  );
};

export default NavBar;
