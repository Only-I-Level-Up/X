"use client";

import { CloseIcon } from "@/assets/closeIcon";
import styled from "@emotion/styled";

type LoginProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginModal = ({ isOpen, onClose }: LoginProps) => {
  console.log("isOpen", isOpen);
  return (
    <StyledLoginModal isOpen={isOpen}>
      <StyledModal>
        <StyledModalHeader>
          <StyledCloseButton onClick={onClose}>
            <CloseIcon />
          </StyledCloseButton>
          <div>로그인 하세요</div>
        </StyledModalHeader>
        <form>
          <StyledModalBody>
            <StyledInputDiv>
              <StyledInputLabel htmlFor="id">아이디</StyledInputLabel>
              <StyledInput id="id" type="text" placeholder="" />
            </StyledInputDiv>
            <StyledInputDiv>
              <StyledInputLabel htmlFor="password">비밀번호</StyledInputLabel>
              <StyledInput id="id" type="text" placeholder="" />
            </StyledInputDiv>
          </StyledModalBody>
          <StyledModalFooter>
            <StyledActionButton>로그인하기</StyledActionButton>
          </StyledModalFooter>
        </form>
      </StyledModal>
    </StyledLoginModal>
  );
};

export default LoginModal;

const StyledLoginModal = styled.div<{ isOpen: boolean }>`
  width: 100vw;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StyledModal = styled.div`
  background: #ffffff;
  position: relative;
  top: 5%;
  max-width: 80vw;
  min-width: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 450px;
  border-radius: 16px;
`;

const StyledModalHeader = styled.div`
  padding: 36px 80px 20px;
  font-size: 31px;
  font-weight: bold;
`;

const StyledCloseButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  border: none;
  cursor: pointer;
  background-color: #fff;
  position: absolute;
  left: 16px;
  top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModalBody = styled.div`
  flex: 1;
  padding: 0 80px;
`;

export const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 56px;
  position: relative;
  margin: 12px 0;
`;

export const StyledInputLabel = styled.label`
  width: 100%;
  display: inline-block;
  position: absolute;
  top: 0;
  border: 1px solid rgb(207, 217, 222);
  border-radius: 4px;
  font-size: 13px;
  height: 56px;
  padding: 8px 8px 0;
  color: rgb(83, 100, 113);
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  font-size: 17px;
  margin-top: 16px;
  padding: 12px 8px 8px;
  outline: none;
`;

export const StyledModalFooter = styled.div`
  padding: 24px 80px;
`;

export const StyledActionButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: rgb(15, 20, 25);
  color: white;
  font-size: 17px;
  cursor: pointer;
  border: none;
`;
