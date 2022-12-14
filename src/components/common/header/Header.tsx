import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Link, useLocation } from "react-router-dom";
import paths from "../../../routes/paths";
import CodeEditorButton from "./CodeEditorButton";
import DarkModeSwitch from "./DarkModeSwitch";
import OpenWorkspaceButton from "./OpenWorkspaceButton";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: '#fff',
}));


const Header = () => {
    const { isAuthenticated } = useAuth0();

  return (
    <AppBar position="relative">
        <Toolbar>
            <Typography variant="h6" sx={{ flex: 1 }}>
                <StyledLink to={paths.home}>
                    Code Editor App
                </StyledLink>
            </Typography>
            <DarkModeSwitch />
            { isAuthenticated ? <AuthenticatedButtons /> : <UnauthenticatedButtons /> }
        </Toolbar>
    </AppBar>
  )
}

const UnauthenticatedButtons = () => {
    return (
        <div>
            <SignInButton /> 
        </div>
    );
}

const AuthenticatedButtonsContainer = styled('div')({ display: 'flex' });

const AuthenticatedButtons = () => {
    const location = useLocation();

    return (
        <AuthenticatedButtonsContainer>
            {location.pathname === paths.home ? <CodeEditorButton /> : <OpenWorkspaceButton />}
            <SignOutButton />
        </AuthenticatedButtonsContainer>
    );
}

export default Header;