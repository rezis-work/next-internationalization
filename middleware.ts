import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ka", "ru"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|ka|ru)/:path*"],
};
