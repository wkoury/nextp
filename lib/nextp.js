const fs = require("fs");
const page = require("./page.js");

exports.nextp = function(){

	let args = process.argv.slice(2);

	if(args.length === 1){
		const filepath = `./pages/${args[0]}.js`;
		const fileContent = page.generateContent(args[0]);

		fs.writeFile(filepath, fileContent, (err) => {
			if (err) throw err;
		
			console.log(`Created page named ${args[0]}.`);
		}); 
	}else{
		console.log("Invalid amount of arguments!");
	}

}
