import { useAuth } from "../../hooks";
import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";

const styles = {
  div: {
    display: "flex",
    gap: "2rem",
  },
};

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header style={styles.div}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
