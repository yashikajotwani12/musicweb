const music=document.querySelector('audio');
const img=document.querySelector("img");
const play=document.getElementById('play');
const artist=document.getElementById('artist');
const title=document.getElementById('title');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const player=document.getElementById('.music_container');


const songs=[{
    name:"music-1",
    title:"I don't care",
    artist:"Ed sheeran",
},
{
    name:"music-2",
    title:"Main tera",
    artist:"Arjit singh",


},
{
    name:"music-3",
    title:"safarnama",
    artist:"Lucky Ali",

}]
 let isPlaying=false;

 const playMusic=()=>{
   
    isPlaying=true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add("anime");
    


};
 const  pauseMusic=()=>{
   
    isPlaying=false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove("anime");



};
play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic();

    }else{
        playMusic();
    }
})

const loadsong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.title;
    music.src="songs/"+songs.name+".mp3";
    img.src="images/"+songs.name+".jpg";
}
songIndex=0;
// loadsong(songs[0]);
const nextSong=()=>{
   songIndex=(songIndex+1) % songs.length;
    loadsong(songs[songIndex]);
    playMusic();
}
const prevSong=()=>{
    songIndex=(songIndex-1+songs.length) % songs.length;
     loadsong(songs[songIndex]);
     playMusic();
 }
next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);
