import Header from "./header";

const Layout = ({data, children}) => {
  console.warn('menus', data);

    return (
        <div>
          <Header headerMenus = {data?.menus?.headerMenus} />
          {children}
    </div> 
    );
}
 
export default Layout;