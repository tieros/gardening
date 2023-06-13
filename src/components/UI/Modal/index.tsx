import styled from 'styled-components';

type ModalProps = {
    children: React.ReactNode;
};
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(210, 210, 210, 0.58);
    mix-blend-mode: normal;
    backdrop-filter: blur(7px);
    z-index: 1000;
`;

const ModalContainer = styled.div<{ backgroundColor?: string }>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    width: 100%;
    min-width: 637px;
    max-width: 1015px;
    max-height: 520px;
    background: linear-gradient(
        131.19deg,
        rgba(212, 215, 210, 0.2) 13.41%,
        rgba(215, 225, 154, 0.2) 37.88%,
        rgba(195, 209, 115, 0.2) 68.42%,
        rgba(135, 146, 73, 0.2) 89.58%
    );
    border: 1px solid #fcfcfc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        inset -2px -2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`;

export const Modal = ({ children }: ModalProps) => (
    <>
        <ModalOverlay />
        <ModalContainer>{children}</ModalContainer>
    </>
);
