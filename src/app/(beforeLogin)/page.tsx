"use client";

import React, { useCallback } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import zLogo from "../../../public/zlogo.png";
import { useOverlay } from "@toss/use-overlay";
import LoginModal from "@/components/LoginModal";

const MainPage = () => {
  const overlay = useOverlay();

  const SignUpModal = useCallback(() => {
    overlay.open(({ isOpen, close }) => (
      <LoginModal isOpen={isOpen} onClose={close} />
    ));
  }, [overlay]);

  const OpenLoginModal = useCallback(() => {
    overlay.open(({ isOpen, close }) => (
      <LoginModal isOpen={isOpen} onClose={close} />
    ));
  }, [overlay]);

  return (
    <StyledMainPage>
      <StyledLeft>
        <Image src={zLogo} alt="logo" />
      </StyledLeft>
      <StyledRight>
        <StyledTitle>지금 일어나고 있는 일</StyledTitle>
        <StyledSubTitle>지금 가입하세요.</StyledSubTitle>
        <StyledSignupButton onClick={SignUpModal}>
          계정 만들기
        </StyledSignupButton>
        <StyledTag>이미 트위터에 가입하셨나요?</StyledTag>
        <StyledLoginButton onClick={OpenLoginModal}>로그인</StyledLoginButton>
      </StyledRight>
    </StyledMainPage>
  );
};

export default MainPage;

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100dvh;
`;

const StyledLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledSignupButton = styled.div`
  width: 300px;
  height: 40px;
  border-radius: 20px;
  padding: 0 16px;
  font-size: 15px;
  background-color: rgb(29, 155, 240);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgb(24, 131, 203);
  }
`;

const StyledLoginButton = styled.div`
  width: 300px;
  height: 40px;
  border-radius: 20px;
  padding: 0 16px;
  font-size: 15px;
  color: rgb(29, 155, 240);
  border: 1px solid rgb(207, 217, 222);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgb(210, 237, 255);
  }
`;

const StyledTitle = styled.h1`
  font-weight: bold;
  font-size: 64px;
  margin: 48px 0;
`;

const StyledSubTitle = styled.h2`
  font-weight: bold;
  font-size: 31px;
  margin-bottom: 32px;
`;

const StyledTag = styled.h3`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 20px;
  margin-top: 40px;
`;
