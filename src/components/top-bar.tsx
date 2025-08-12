import { useTranslations } from 'next-intl'
import React from 'react'

export default function TopBar() {

    const t = useTranslations("MainMenu");

    return (
        <div>{t("MainPage")}</div>
    )
}
