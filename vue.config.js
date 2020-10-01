module.exports = {
	css: {
		sourceMap: true,
		loaderOptions: {
			sass: {
				additionalData: `@import "@/utils/_variables.scss";`,
			},
		},
	},
};
