import useIsConnected from "hooks/useIsConnected";
import { Deployer } from "screens/deployer";
import Connect from "components/connect";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";

const StyledApp = styled(Box)({
  maxWidth: "960px",
  width: "calc(100% - 50px)",
  marginLeft:'auto',
  marginRight:'auto',
  paddingTop: '40px',
  paddingBottom:'100px'
});

function App() {
  useIsConnected();

  return (
    <StyledApp>
      {/* <Navbar /> */}
      <Deployer />
      <Connect />
    </StyledApp>
  );
}

export default App;
