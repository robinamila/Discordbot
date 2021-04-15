console.log ("booting")

require('dotenv').config();


const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);


client.on('ready', readyDiscord);


// Forskellige arrays
const hello = [
"hello :flag_us:",
"Hej :flag_dk:",
"Bonjour :flag_fr:",
"Hola :flag_es:",
"Nǐn hǎo :flag_cn:",
"Konnichiwa :flag_jp:",
"Guten Tag :flag_de: ",
"Olá :flag_pt:",
]

const rps = [
    "rock",
    "paper",
    "scissors",
    ]

  

const htxmeme = [
    "https://i.imgur.com/X9HB3BP.png",
    "https://i.imgur.com/LcGkvF2.jpg",
    "https://i.imgur.com/PG3D2fg.jpg",
    "https://i.imgur.com/ecoIasp.jpg",
    "https://i.imgur.com/hl8JU5x.jpg",
    "https://i.imgur.com/YsbEXyY.jpg",
    "https://i.imgur.com/YqR9LNg.jpg",
    "https://i.imgur.com/CIT0QVa.jpg",
    "https://i.imgur.com/BvrZOR8.jpg",
    "https://i.imgur.com/buUsMkV.jpg",
    "https://i.imgur.com/jd7lNeP.jpg",
    "https://i.imgur.com/xCFpH5j.jpg",

]

const gif = [
    "https://media1.tenor.com/images/8eb9c0d7c7f5be8daf0b2c94dc158e2b/tenor.gif?itemid=20794973",
    "https://media1.tenor.com/images/3c30a23dc6165071ee1416cb544cc876/tenor.gif?itemid=20795627",
    "https://media.tenor.com/images/b849592b0399dcd46b23c0eb32a0e671/tenor.gif",
    "https://media.tenor.com/images/a13a2540a6cb5e5506e8db934ba7b597/tenor.gif",
    "https://media.tenor.com/images/b65b0d0cd31f09d40106482cdeef2e97/tenor.gif",
    "https://media.tenor.com/images/ad593b8a166b65a6bc04b22938705cf7/tenor.gif",
    "https://media1.tenor.com/images/c0b1249e3fcccaa2c66fcd8669de4878/tenor.gif?itemid=20889874",
    "https://media1.tenor.com/images/5cc7e0921847f77840922b573abf4ff4/tenor.gif?itemid=20889875",
]

const shame = [
"Shame on you man :man_facepalming:",
"Im disgusted :nauseated_face: ",
"How dare you",
"You need jesus :church: :cross: :pray: ",
"You down bad my G :camera_with_flash: :grimacing: ",
]

const FQ = [
    "Famous Quote: Malthe skal malkes i Maltas",
    "Famous Quote: I er allesammen en flok Hyæner -Bertel",
    "Famous Quote: DAAAAAAYYUUUUUMMMM -The boys",
    "Famous Quote: Åh nøj -Bertel",
    "Famous Quote: God jul -Rune",

    ]

const rpsreply = [
    "https://media1.tenor.com/images/2d93eb8b36a0dda1f793be9973422b59/tenor.gif?itemid=17770189",
    "https://media1.tenor.com/images/5769b117d6ab10e72fd89ceddb4fd812/tenor.gif?itemid=12123441",
    "https://media1.tenor.com/images/9291f2d01792367aac63f6adaf83c06e/tenor.gif?itemid=10788627",
    "https://media1.tenor.com/images/fa01392ab5aa882c37b08251b8592a67/tenor.gif?itemid=10762645",
    "https://media1.tenor.com/images/4a040b564fa21ec8516ccae925e21bbe/tenor.gif?itemid=17606322",
    "https://media1.tenor.com/images/463876e54515805dea2c1c6da73e34ae/tenor.gif?itemid=9884029",
]

function readyDiscord(){
    console.log("up & running");
}


const bot = new Discord.Client();


client.on('message', gotMessage);


async function gotMessage(msg){

    //HELP COMMAND
    if (msg.content=='#help'){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#800000')
        .setTitle('RJ bot command list')
        .setAuthor('RJ bot', "https://i.imgur.com/jYcC5AN.jpg", 'https://discord.js.org')
        .setThumbnail('https://i.imgur.com/vmDf0IK.jpg')
        .addFields(
            { name: 'Commands:', value: '#help, #hej, #htxmeme, #gif, #FQ'},
            { name: '\u200B', value: '\u200B' },
            { name: 'NSFW commands:', value: '#nakedwoman'},
            { name: '\u200B', value: '\u200B' },
        )
        
        .setTimestamp()
        .setFooter('Lavet af Jakob Gregersen og Robin Amila', 'https://i.imgur.com/jYcC5AN.jpg');
    
        msg.reply(exampleEmbed);
    }

    //HEJ COMMAND
    console.log(msg.content)
    if (msg.content== '#hej'){
        const index = Math.floor(Math.random() * hello.length);
        msg.reply(hello[index])
    }
    
    //NAKEDWOMAN COMMAND
    if ( msg.content=='#nakedwoman'){
    let url = `https://g.tenor.com/v1/search?q=caughtin4k&key=${process.env.TENORKEY}&limit=8`
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    const ayo = Math.floor(Math.random() * shame.length);
    msg.reply(shame[ayo])
    msg.channel.send(json.results[index].url);
    }


    //gif COMMAND 
    if ( msg.content== '#gif'){
        let newGif=[];
        console.log(newGif); 
        if(newGif.length >= -1){
            let newGif = gif;
        }
        const index = Math.floor(Math.random() * gif.length);
        msg.channel.send(gif[index])
    }

    //HTXMEME COMMAND
    if (msg.content== '#htxmeme'){
        const index = Math.floor(Math.random() * htxmeme.length);
        msg.channel.send(htxmeme[index])
    }

    //Dagens Quote 
    if (msg.content== '#FQ'){
        const index = Math.floor(Math.random() * FQ.length);
        msg.channel.send(FQ[index])
    }
    
    //Rock Paper Scissors
    if (msg.content== '#rps'){
        const index = Math.floor(Math.random() * rpsreply.length);
        msg.channel.send(rpsreply[index])
        msg.channel.send("choose your desired weapon to battle me with").then(function(sentMessage) {
            sentMessage.react('🪨').then(() => sentMessage.react('🧻')).then(() => sentMessage.react('✂️'))
        });
        
        }
    
  
    
}
