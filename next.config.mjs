import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL:
      "https://script.google.com/macros/s/AKfycbxGnkTqM-5UVMq586FT9PKX5c4IL4QD46iuJuWsEzgdnB4bugbjxYE0KnWLVw-O6JIJ/exec",

    API_URL_DAILY:
      "https://script.google.com/macros/s/AKfycbyJ7yb9M2-acLKMOzAsgKevf4HOvBDoHDACQYpx73SlLvI0s56uogaVHVMDm2-dYP4ZiA/exec",
  },
};

export default withNextIntl(nextConfig);
