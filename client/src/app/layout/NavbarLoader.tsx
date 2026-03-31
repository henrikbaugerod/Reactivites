import { LinearProgress } from "@mui/material";
import { observer } from "mobx-react-lite"
import { useStore } from "../../lib/hooks/useStore";

const NavbarLoader = observer(function NavbarLoader() {
  const { uiStore } = useStore();

  return uiStore.isLoading ? (
    <LinearProgress
      color="secondary"
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 4
      }}
    />
  ) : null
});

export default NavbarLoader;