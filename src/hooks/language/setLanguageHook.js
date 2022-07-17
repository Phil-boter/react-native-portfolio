import { useState, useContext, useCallback, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageProvider";

export default function SetLanguageHook() {
	const { language } = useContext(LanguageContext);
	const [en, setLanguageToEnglish] = useState(false);

	const setLanguage = useCallback(() => {
		language === "en"
			? setLanguageToEnglish(true)
			: setLanguageToEnglish(false);
	}, [setLanguageToEnglish, language]);

	useEffect(() => {
		setLanguage();
	}, [language, setLanguage]);

	return en;
}
