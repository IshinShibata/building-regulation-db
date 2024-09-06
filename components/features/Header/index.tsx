import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import AccessibilityRoundedIcon from "@mui/icons-material/AccessibilityRounded";
import { HeaderInfo } from "./elements";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Anthony sistilli
        </Typography>
        <AccessibilityRoundedIcon />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
