import { Link, useNavigate } from "react-router-dom";
import { Icon } from "../../../../components";
import styled from "styled-components"

const RightAlined = styled.div`
   display: flex;
   justify-content: flex-end;
`;

const StyledLink = styled(Link)`
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 18px;
   width: 100px;
   height: 32px;
   border: 1px solid #000;
   background-color: #eee;
`;

const StyledDiv = styled.div`
   cursor: pointer;
`;

const ControlPanelContainer = ({ className }) => {
   const navigate = useNavigate();

   return (
      <div className={className}>
         <RightAlined>
            <StyledLink to='/login'>Войти</StyledLink>
         </RightAlined>
         <RightAlined>
            <StyledDiv onClick={() => navigate(-1)}>
               <Icon id='fa-backward' margin='10px 0 0 0' />
            </StyledDiv>
            <Link to='/post'><Icon id='fa-file-text-o' margin='10px 0 0 16px' /></Link>
            <Link to='/users'><Icon id='fa-users' margin='10px 0 0 16px' /></Link>
         </RightAlined>
      </div >
   );
}

export const ControlPanel = styled(ControlPanelContainer)`

`;