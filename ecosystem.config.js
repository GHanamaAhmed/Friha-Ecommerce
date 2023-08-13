module.exports = {
	apps: [
		{
			script: "index.js",
			watch: ".",
		},
		{
			script: "./service-worker/",
			watch: ["./service-worker"],
		},
	],

	deploy: {
		production: {
			user: "root",
			host: "88.198.200.124",
			ref: "origin/ahmed",
			repo: "git@github.com:0asaca0rum0/ecommerce123.git",
			path: "/home/test01",
			"pre-deploy-local": "",
			"post-deploy":
				"source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
			"pre-setup": "",
		},
	},
};
