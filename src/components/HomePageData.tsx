import { useTranslation } from "react-i18next";


function GetHomePageData() {
    const { t } = useTranslation();

    return {
        sidebar: {
            home: t("HomeScreen.Sidebar.Home"),
            aboutMe: t("HomeScreen.Sidebar.AboutMe"),
            contact: t("HomeScreen.Sidebar.Contact")
        },
        bodyPage: {
            welcome: t("HomeScreen.Welcome"),
            introduce: t("HomeScreen.Introduce"),
            name: t("HomeScreen.Name"),
            proffesion: t("HomeScreen.Proffesion"),
            peptalk: t("HomeScreen.Pep-talk"),
            button: t("HomeScreen.Button")
        }
    }
}

export default GetHomePageData;
