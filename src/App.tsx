import { MenuDesk } from "./components/menus/desktop/MenuDesk";
import { MenuMobile } from "./components/menus/mobile/MenuMobile";

export const App = () => {
    return (
        <section className="flex" id="main">
            <MenuDesk />
            <MenuMobile />
        </section>
    )
};
