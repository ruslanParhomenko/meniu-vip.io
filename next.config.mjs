import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL:
      "https://script.google.com/macros/s/AKfycbxGnkTqM-5UVMq586FT9PKX5c4IL4QD46iuJuWsEzgdnB4bugbjxYE0KnWLVw-O6JIJ/exec",
  },
};

export default withNextIntl(nextConfig);
