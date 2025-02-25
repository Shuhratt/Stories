module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
    "linebreak-style": 0,
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"never"
		],
	}
}
