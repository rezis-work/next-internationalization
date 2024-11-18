# Project Overview

This project is built using Next.js and utilizes internationalization (i18n) to support multiple languages. We are using the `next-intl` library to manage translations and provide a seamless experience for users across different locales.

## Key Features

- **Dynamic Routing**: The application supports dynamic routing based on the user's selected language.
- **Translation Management**: We use the `useTranslations` hook from `next-intl` to fetch and display localized content.
- **Locale Switching**: Users can switch between languages, and the content updates accordingly.

## Getting Started

1. **Install Dependencies**: Make sure to install the necessary packages for internationalization.

   ```bash
   npm install next-intl
   ```

2. **Setup Translations**: Create translation files for each supported language in the `locales` directory.

3. **Usage**: Use the `useTranslations` hook in your components to access translated strings.

## Example

Here’s a simple example of how to use translations in a component:

# Start Generation Here

// This example demonstrates how to use the `useTranslations` hook from the `next-intl` library
// to fetch and display localized content in a Next.js component.

import { useTranslations } from "next-intl";

export default function ExampleComponent() {
const t = useTranslations("example");

return (

<div>
<h2>{t("exampleTitle")}</h2>
<p>{t("exampleContent")}</p>
</div>
);
}
