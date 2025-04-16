import { Link, useNavigate } from "react-router-dom";
import { Icon, Button } from "../../../../components";
import styled from "styled-components"

const RightAlined = styled.div`
   display: flex;
   justify-content: flex-end;
`;

const StyledIcon = styled.div` 
   cursor: pointer;
`;

const ControlPanelContainer = ({ className }) => {
   const navigate = useNavigate();

   return (
      <div className={className}>
         <RightAlined>
            <Button>
               <Link to='/login'>Войти</Link>
            </Button>
         </RightAlined>
         <RightAlined>
            <StyledIcon onClick={() => navigate(-1)}>
               <Icon id='fa-backward' margin='10px 0 0 0' />
            </StyledIcon>
            <Link to='/post'><Icon id='fa-file-text-o' margin='10px 0 0 16px' /></Link>
            <Link to='/users'><Icon id='fa-users' margin='10px 0 0 16px' /></Link>
         </RightAlined>
      </div >
   );
}

export const ControlPanel = styled(ControlPanelContainer)`

`;