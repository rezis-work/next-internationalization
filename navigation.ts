import { createNavigation } from "next-intl/navigation";
import { locales } from "@/i18";

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales /* ... */,
});
