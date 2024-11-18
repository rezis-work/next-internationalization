import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "ka", "ru"];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!locales.includes(locale as string)) notFound();

  try {
    return {
      messages: (await import(`./messages/${locale}.json`)).default,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    return {
      messages: {},
    };
  }
});
