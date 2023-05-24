import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: ${({ theme }) => theme.color.skeptic};
    padding: 10px;
    border-radius: 5px;
    margin: 20px 0;
    margin-bottom: 0px;
    text-align: center;
    box-shadow: 2px 2px 20px ${({ theme }) => theme.color.black};
    height: 560px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: 750px;
    }
`;

export const Header = styled.h1`
    background-color: ${({ theme }) => theme.color.amazon};
    color: ${({ theme }) => theme.color.wildSand};
    font-size: 24px;
    max-width: 250px;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    font-weight: 700;
    text-align: center;
    display: inline-block;
    box-shadow: 1px 1px 10px ${({ theme }) => theme.color.mineShaft}; 
`;

export const Label = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
    text-align: left;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 5px;
    }
`;

export const Field = styled.input`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 10px;
    width: 100%;
    max-width: 250px;
    border-radius: 5px;
`;

export const LoadingText = styled.p`
    color: ${({ theme }) => theme.color.amazon};
    font-size: 20px;
    margin-top: 5rem;
    line-height: 2;
`;

export const Spinner = styled.div`
  margin: 50px auto;
  height: 60px;
  width: 60px;
  border: 5px solid ${({ theme }) => theme.color.amazon};
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg) scale(1.2);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorText = styled(LoadingText)`
    color: ${({ theme }) => theme.color.crimson};
`;

export const Info = styled.p`
    color: ${({ theme }) => theme.color.amazon};
    font-style: italic;
    text-align: center;
    line-height: 1.5;
`;

export const StyledDate = styled.strong`
    font-weight: 700;
`;
