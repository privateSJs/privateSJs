import { useTranslation } from "react-i18next";


function GetContactPageData() {
    const { t } = useTranslation();

    return {
        bodyPage: {
            title: t("ContactMeScreen.Title"),
            introduce: t("ContactMeScreen.Introduce"),
            description: t("ContactMeScreen.Description"),
            fullname: t("ContactMeScreen.FullName"),
            fullnamePlaceholder: t("ContactMeScreen.FullNamePlaceHolder"),
            email: t("ContactMeScreen.Email"),
            emailPlaceholder: t("ContactMeScreen.EmailPlaceHolder"),
            phoneNo: t("ContactMeScreen.PhoneNo"),
            phoneNoPlaceholder: t("ContactMeScreen.PhoneNoPlaceHolder"),
            message: t("ContactMeScreen.Message"),
            messagePlaceholder: t("ContactMeScreen.MessagePlaceHolder"),
            buttonSubmit: t("ContactMeScreen.ButtonSubmit"),
            policy1: t("ContactMeScreen.Policy1"),
            policy2: t("ContactMeScreen.Policy2"),
            policy3: t("ContactMeScreen.Policy3"),
        }
    }
}

export default GetContactPageData;