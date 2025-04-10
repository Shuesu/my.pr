import { ControlPanel, Logo } from "./components";
import styled from "styled-components";

const Description = styled.div`
   font-style: italic;
`;

const HeaderContainer = ({ className }) => (
   <header className={className}>
      <Logo />
      <Description>
         Веб-технологии<br />
         Написание кода<br />
         Разбор ошибок
      </Description>
      <ControlPanel />
   </header>
);

export const Header = styled(HeaderContainer)`
   display: flex;
   justify-content: space-between;
   position: fixed;
   top: 0;
   background-color: #fff;
   width: 1000px;
	height: 120px;
   padding: 20px 40px;
   box-shadow: 0 1px 10px 5px rgba(0, 0, 0, 0.3);
`;