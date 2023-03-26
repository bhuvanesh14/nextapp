import Header from "./header";

const Layout = ({data, children}) => {
  console.warn('HeadermenusLayout', data);

    return (
        <>
          <Header headerMenus = {data?.menus?.headerMenus} /> 

          {children}
    </> 
    );
}
 
export default Layout;