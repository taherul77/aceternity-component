import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['images.unsplash.com',"images.remotePatterns", 'assets.aceternity.com','pbs.twimg.com', "aceternity.com","api.microlink.io",'twitter.com',"images.remotePatterns"], 
	},
};

export default withNextIntl(nextConfig);
