// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// const createNextIntlPlugin = require("next-intl/plugin");

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['images.unsplash.com'],
	  },
};

export default withNextIntl(nextConfig);
