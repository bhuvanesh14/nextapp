import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";


export const GET_MENUS = gql`
headerMenus: menuItems(where: {location: HEADER_MENU_1, parentId: "0"}) {
    edges {
      node {
        ...MenuFragment
        childItems {
          edges {
            node {
                ...MenuFragment
            }
          }
        }
      }
    }
  }
  footerMenus: menuItems(where: {location: FOOTER_MENU_1, parentId: "0"}) {
    edges {
      node {
        ...MenuFragment
      }
    }
  }
  ${MenuFragment}
  `
// testing