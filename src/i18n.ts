import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// List of supported locales
const locales = ["en", "bn"];

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale)) {
		notFound(); // Call notFound if the locale is invalid
	}

	return {
		// Load messages dynamically based on the locale
		messages: (await import(`../messages/${locale}.json`)).default,
	};
});
