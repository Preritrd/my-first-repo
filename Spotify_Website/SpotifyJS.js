// console.log("Spotify JS Loaded");

// let currentSong = new Audio();
// let songs = [];
// let currAlbum = null;
// let currentIndex = 0;

// // Format seconds → mm:ss
// function secondsToMinutesSeconds(seconds) {
//     if (isNaN(seconds) || seconds < 0) return "00:00";
//     const m = Math.floor(seconds / 60);
//     const s = Math.floor(seconds % 60);
//     return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
// }

// // Load album from info.json
// async function loadAlbum(file) {
//     let res = await fetch(`/Spotify_Website/Sp_Songs/${file}`);
//     let info = await res.json();

//     currAlbum = info;
//     songs = info.songs;

//     // Show playlist
//     let songUL = document.querySelector(".songList ul");
//     songUL.innerHTML = "";
//     songs.forEach(song => {
//         let li = document.createElement("li");
//         li.innerHTML = `
//             <img class="invert" width="34" src="img/music.svg" alt="">
//             <div class="info">
//                 <div>${song}</div>
//                 <div>${info.title}</div>
//             </div>
//             <div class="playnow">
//                 <span>Play Now</span>
//                 <img class="invert" src="img/play.svg" alt="">
//             </div>`;
//         li.addEventListener("click", () => playMusic(song));
//         songUL.appendChild(li);
//     });

//     if (songs.length) playMusic(songs[0], true);
// }

// // Play a song
// function playMusic(track, pause = false) {
//     if (!track) return;
//     currentIndex = songs.indexOf(track);
//     currentSong.src = `/Spotify_Website/Sp_Songs/${encodeURIComponent(track)}`;
//     if (!pause) {
//         currentSong.play();
//         document.getElementById("play").src = "pause.svg";
//     }
//     document.querySelector(".songinfo").textContent = track;
//     document.querySelector(".songtime").textContent = "00:00 / 00:00";
// }

// // Display albums on homepage
// async function displayAlbums() {
//     let res = await fetch(`/Spotify_Website/Sp_Songs/`);
//     let html = await res.text();

//     let div = document.createElement("div");
//     div.innerHTML = html;
//     let as = div.getElementsByTagName("a");
//     let cardContainer = document.querySelector(".cardContainer");

//     for (let a of as) {
//         if (a.href.endsWith(".json")) {
//             let file = a.href.split("/").pop();
//             let infoRes = await fetch(`/Spotify_Website/Sp_Songs/${file}`);
//             let info = await infoRes.json();

//             let coverPath = `/Spotify_Website/Sp_Songs/${info.cover}`;

//             let card = document.createElement("div");
//             card.className = "card";

//             card.innerHTML = `
//                 <div class="play">
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
//                             stroke-linejoin="round" />
//                     </svg>
//                 </div>
//                 <img src="${coverPath}" alt="">
//                 <h2>${info.title || "Untitled"}</h2>
//                 <p>${info.description || ""}</p>`;

//             card.addEventListener("click", async () => {
//                 await loadAlbum(file);
//             });

//             cardContainer.appendChild(card);
//         }
//     }
// }

// // Main logic
// async function main() {
//     await displayAlbums();

//     // Play / Pause
//     document.getElementById("play").addEventListener("click", () => {
//         if (currentSong.paused) {
//             currentSong.play();
//             document.getElementById("play").src = "pause.svg";
//         } else {
//             currentSong.pause();
//             document.getElementById("play").src = "play.svg";
//         }
//     });

//     // Time update
//     currentSong.addEventListener("timeupdate", () => {
//         document.querySelector(".songtime").textContent =
//             `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
//         document.querySelector(".circle").style.left =
//             (currentSong.currentTime / currentSong.duration) * 100 + "%";
//     });

//     // Seekbar
//     document.querySelector(".seekbar").addEventListener("click", e => {
//         let percent = (e.offsetX / e.target.getBoundingClientRect().width);
//         document.querySelector(".circle").style.left = (percent * 100) + "%";
//         currentSong.currentTime = percent * currentSong.duration;
//     });

//     // Previous
//     document.getElementById("previous").addEventListener("click", () => {
//         if (currentIndex > 0) playMusic(songs[currentIndex - 1]);
//     });

//     // Next
//     document.getElementById("next").addEventListener("click", () => {
//         if (currentIndex < songs.length - 1) playMusic(songs[currentIndex + 1]);
//     });

//     // Volume
//     document.querySelector(".range input").addEventListener("input", e => {
//         currentSong.volume = e.target.value / 100;
//         if (currentSong.volume > 0)
//             document.querySelector(".volume img").src = "volume.svg";
//     });

//     // Mute / Unmute
//     document.querySelector(".volume img").addEventListener("click", e => {
//         if (e.target.src.includes("volume.svg")) {
//             e.target.src = "mute.svg";
//             currentSong.volume = 0;
//             document.querySelector(".range input").value = 0;
//         } else {
//             e.target.src = "volume.svg";
//             currentSong.volume = 0.5;
//             document.querySelector(".range input").value = 50;
//         }
//     });

//     // Sidebar open/close
//     document.querySelector(".hamburger").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "0";
//     });
//     document.querySelector(".close").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "-120%";
//     });
// }

// main();




// // <---------------------------> Working <--------------------------->
// async function GetSongs() {
//     let baseURL = "http://127.0.0.1:3000/Spotify_Website/Sp_Songs/";
//     let a = await fetch(baseURL);
//     let response = await a.text();

//     let div = document.createElement("div");
//     div.innerHTML = response;
//     let alink = div.getElementsByTagName("a");

//     let files = { json: [] };

//     for (let index = 0; index < alink.length; index++) {
//         let fileName = alink[index].getAttribute("href");

//         if (!fileName || fileName === "../") continue;

//         if (fileName.endsWith(".json")) {
//             // ✅ Fix backslashes
//             fileName = fileName.replace(/\\/g, "/");

//             // ✅ Prevent duplicate slash
//             if (fileName.startsWith("/")) {
//                 fileName = fileName.substring(1);
//             }

//             files.json.push(baseURL + fileName);
//         }
//     }
//     return files;
// }


// GetSongs().then(files => {
//     console.log(files);
// });


// async function main() {
//     let files = await GetSongs();
//     let songul = document.querySelector(".songList ul");
//     songul.innerHTML = "";

//     for (let i = 0; i < files.json.length; i++) {
//         try {
//             let jsonUrl = files.json[i];
//             let response = await fetch(jsonUrl);

//             // make sure it's JSON
//             if (!response.ok) {
//                 console.error("❌ Failed to load:", jsonUrl);
//                 continue;
//             }

//             let data = await response.json();

//             let li = document.createElement("li");

//             // Cover image
//             let img = document.createElement("img");
//             img.src = "http://127.0.0.1:3000/Spotify_Website/Sp_Songs/" + data.cover;
//             img.width = 60;
//             img.style.marginRight = "10px";

//             // Title
//             let span = document.createElement("span");
//             span.textContent = data.title || "Unknown Song";

//             li.appendChild(img);
//             li.appendChild(span);
//             songul.appendChild(li);
//         } catch (err) {
//             console.error("⚠️ JSON parse error:", err);
//         }
//     }
// }

// main();


// async function GetSongs() {
//     let baseURL = "http://127.0.0.1:3000/Spotify_Website/Sp_Songs/";
//     let a = await fetch(baseURL);
//     let response = await a.text();

//     let div = document.createElement("div");
//     div.innerHTML = response;
//     let alink = div.getElementsByTagName("a");

//     let files = { json: [] };

//     for (let index = 0; index < alink.length; index++) {
//         let fileName = alink[index].getAttribute("href");
//         if (!fileName || fileName === "../") continue;

//         if (fileName.endsWith(".json")) {
//             fileName = fileName.replace(/\\/g, "/");
//             if (fileName.startsWith("/")) {
//                 fileName = fileName.substring(1);
//             }
//             files.json.push(baseURL + fileName);
//         }
//     }
//     return files;
// }

// GetSongs().then(files => {
//     console.log(files);
// });

// async function main() {
//     try {
//         let files = await GetSongs();
//         console.log("✅ JSON files found:", files.json);

//         // ✅ Correct selector (your HTML has class="songList")
//         let songul = document.querySelector(".songList ul");
//         songul.innerHTML = "";

//         for (let i = 0; i < files.json.length; i++) {
//             let jsonUrl = files.json[i];
//             try {
//                 let response = await fetch(jsonUrl);
//                 if (!response.ok) {
//                     console.error("❌ Failed to load:", jsonUrl);
//                     continue;
//                 }

//                 let data = await response.json();
//                 console.log("🎵 Loaded JSON:", data);

//                 let li = document.createElement("li");
//                 li.style.display = "flex";
//                 li.style.alignItems = "center";
//                 li.style.marginBottom = "10px";
//                 li.style.color = "white"; // ✅ force visible

//                 // Cover image
//                 let img = document.createElement("img");
//                 img.src = "http://127.0.0.1:3000/Spotify_Website/Sp_Songs/" + data.cover;
//                 img.width = 60;
//                 img.style.marginRight = "10px";

//                 // Song title
//                 let span = document.createElement("span");
//                 span.textContent = data.title || "Unknown Song";

//                 li.appendChild(img);
//                 li.appendChild(span);

//                 songul.appendChild(li);
//             } catch (err) {
//                 console.error("❌ Error parsing JSON:", jsonUrl, err);
//             }
//         }
//     } catch (err) {
//         console.error("❌ main() failed:", err);
//     }
// }

// main();
