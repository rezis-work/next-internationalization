import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homepage");
  // const backContent = useTranslations("backContent");
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("content")}</p>
      {/* {backContent("en") !== "en" && <p>{backContent("en")}</p>} */}
      <Link href="/about">About</Link>
    </div>
  );
}
