/**
* geekcampmy2016 Module
*
* Description
*/
geekcampmy2016.controller('SpeakerInfoController', function(){
	var speakerInfo = this;

	speakerInfo.speakers = [
		{name: "Kevin H. A. Tan", picture: "https://media.licdn.com/media/AAEAAQAAAAAAAAVhAAAAJDljNDVlZGM2LWZhMzAtNDZjNS04ZmVkLWEzYmM5NDM5ZDA5Yw.jpg", position: "Android Developer", website: "https://about.me/kevintanhongann"},
		{name: "Ruben Tan", picture: "https://media.licdn.com/media/p/1/000/125/353/3fa8e21.jpg", position: "Co-Founder, Javascript Developers Malaysia", description: "Ruben Tan lived through the dark ages of Javascript and is currently a co-founder and primary custodian of the Javascript Developers Malaysia user group. Ex-CTO of Bookya, he is currently figuring out how to upload his consciousness into a robot to live forever."},
		{name: "Khairil Yusof", picture: "https://farm8.staticflickr.com/7261/7606252186_96900955b6.jpg", position: "Coordinator, Sinar Project", website: "http://sinarproject.org/en/about/team"},
		{name: "Ng Boo Jiun", picture: "https://upload.wikimedia.org/wikipedia/commons/1/14/Lightsaber,_silver_hilt,_blue_blade.png", position: "One of Golang Facebook group administrators.", website: "https://socketloop.com/"},
		{name: "Micheal Leow", picture: "https://farm9.staticflickr.com/8739/17009459621_2bca81ca47.jpg", position: "Freedom of Information Initiatives", website: "http://sinarproject.org/en/about/team"},
		{name: "Chow Chee Leong", picture: "https://avatars3.githubusercontent.com/u/411259?v=3&s=460", position: "Software Developer", website: "https://github.com/klrkdekira"},
		{name: "Stan Feldman", picture: "http://www.geekcamp.my/assets/images/speakers/stan-01.png", position: "Founder of LinkedChat and Senior Mobile Developer at VLT", website: "http://vltlabs.com/"},
		{name: "Akmal Fikri Abdul Rahman", picture: "http://www.geekcamp.my/assets/images/speakers/akmal-fikri.jpg", position: "COO at ABSOFT PLT", website: "https://www.linkedin.com/in/akmalfikri"},
		{name: "Leong Hean Hong", picture: "http://www.geekcamp.my/assets/images/speakers/brown_shirt.png", position: "Technopreneur, Engineer, Geek", website: "http://www.mrleong.net"}

		//{name: "Izhar Firdaus", picture: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/14185_10152602729699133_323077790288306727_n.jpg?oh=e70020a41a6355a006d625131bb52eb1&oe=5727F571", position: "yet-another-opensource-geek", website: "https://www.linkedin.com/in/kagesenshi"} he might clash with other event
	];
});
