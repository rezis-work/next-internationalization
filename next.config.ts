import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withIntl = createNextIntlPlugin("./i18.ts");

const nextConfig: NextConfig = {};

export default withIntl(nextConfig);
