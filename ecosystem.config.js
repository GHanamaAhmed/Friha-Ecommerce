module.exports = {
	apps: [
		{
			name: 'client-side',
			script: "npm start",
			watch: true,
			env :{
				NODE_ENV : 'production'
			}

		},

	],

	deploy: {
		production: {
			user: "root",
			host: "88.198.200.124",
			ref: "origin/ahmed",
			repo: "git@github.com:0asaca0rum0/ecommerce123.git",
			path: "/home/test01",
			"post-deploy":
				"source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",

		},
	},
};
