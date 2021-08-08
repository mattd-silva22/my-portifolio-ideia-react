import { Fragment } from "react";
import { HeaderNavbar } from "../../components/HeaderNavbar";

import '../../assets/styles/globalStyles.scss'
import { MyBanner } from "../../components/MyBanner/MyBanner";
import { MyPortifolio } from "../../components/Portifolio/MyPortifolio/MyPortifolio";
import { MyContacts } from "../../components/MyContacts/MyContacts";

export function MainPage() {




    return (
      <Fragment>
          <HeaderNavbar titleText={'</>'} showNavBar={true}/>
          <MyBanner/>
          <MyPortifolio></MyPortifolio>
          <MyContacts></MyContacts>
      </Fragment>
    )




}