import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL:
      "https://script.google.com/macros/s/AKfycbxGnkTqM-5UVMq586FT9PKX5c4IL4QD46iuJuWsEzgdnB4bugbjxYE0KnWLVw-O6JIJ/exec",

    API_URL_DAILY:
      "https://script.google.com/macros/s/AKfycbzGHkFUUwQ8PSejWx1yEOEMoWKGauqNMbtV90N8qFwKlPl3cbp8p2qnt3Klzrwjloo06w/exec",
  },
};

export default withNextIntl(nextConfig);
