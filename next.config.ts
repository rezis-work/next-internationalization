import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withIntl = createNextIntlPlugin("./i18.ts");

const nextConfig: NextConfig = {
  /* config options here */
};

export default withIntl(nextConfig);
