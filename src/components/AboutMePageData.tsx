import { useTranslation } from "react-i18next";


function GetAboutMePageData() {
    const { t } = useTranslation();

    return {
        bodyPage: {
            title: t("AboutMeScreen.Title"),
            description: t("AboutMeScreen.Description"),
            educationTitle: t("AboutMeScreen.EducationTitle"),
            education1: t("AboutMeScreen.Education1"),
            education2: t("AboutMeScreen.Education2"),
            education3: t("AboutMeScreen.Education3"),
            hobbyTitle: t("AboutMeScreen.HobbyTitle"),
            hobby1: t("AboutMeScreen.Hobby1"),
            hobby2: t("AboutMeScreen.Hobby2"),
            hobby3: t("AboutMeScreen.Hobby3"),
            hobby4: t("AboutMeScreen.Hobby4"),
        }
    }
}

export default GetAboutMePageData;
