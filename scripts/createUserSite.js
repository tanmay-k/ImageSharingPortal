//This script will fork main site to create user's personal website
function process(doc)	{ //Just sample method
	console.log("You clicked on create site button!")
	alert("You clicked on create site button!\n It works!!")
	console.log(doc);
}

async function createSite()	{
	var uname = document.getElementById('user-name')
	var bio = document.getElementById('bio')

	var archive = await DatArchive.create({title:'ISP : '+uname.value,description:bio.value,prompt:true})//await DatArchive.load('dat://c718aacd384df77998bc8ccfe9a226b4ecef1dde7cff55877cdd19c5aac61efc')
	var mainArchive = await DatArchive.load('dat://c718aacd384df77998bc8ccfe9a226b4ecef1dde7cff55877cdd19c5aac61efc')

	alert(archive.url)

	var buf = await mainArchive.readFile('userSite/home.html',{encoding:'utf-8'})
	await archive.writeFile('index.html',buf,{encoding:'utf-8'})
}
