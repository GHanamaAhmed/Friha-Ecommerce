module.exports = {
	apps: [
		{
			script: "npm start",
		},
	],

	deploy: {
		production: {
			key: "ssh-key-2023-07-01.key",
			user: "ubuntu",
			host: "158.180.30.34",
			ref: "origin/main",
			repo: "git@github.com:0asaca0rum0/ecommerce123.git",
			path: "/home/ubuntu",
			"pre-deploy-local": "",
			"post-deploy":
				"source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
			"pre-setup": "",
			ssh_options: "forwardAgent=yes",
		},
	},
};
