import Nav from "./nav.js";
import {isEmpty} from 'lodash';

const Header = ({headerMenus}) => {

    if (isEmpty(headerMenus)) {
        return null;
    }
    return ( 
        <Header>
            <Nav />
        </Header>
     );
}
 
export default Header;