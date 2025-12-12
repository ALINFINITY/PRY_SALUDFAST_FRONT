import { MenuModule } from "./Menu_module";
import { RoutesModule } from "./Routes_module";

export const AuthModule = () => {
  return (
    <>
      <MenuModule/>
      <RoutesModule></RoutesModule>
    </>
  );
};
