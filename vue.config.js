module.exports = {
	publicPath:
		process.env.NODE_ENV === "production" ? "/quickSort/" : "/",
	css: {
		sourceMap: true,
		loaderOptions: {
			sass: {
				additionalData: `@import "@/utils/_variables.scss";`,
			},
		},
	},
};
