import { myFavAlbums } from "/data/albums.js";

document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("album-grid");
  const TOTAL_SLOTS = 30;

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledFav = shuffleArray(myFavAlbums);
  const spotsToFill = Math.max(0, TOTAL_SLOTS - shuffledFav.length);
  const fillerAlbums = Array.from({ length: spotsToFill }, (_, i) => ({
    id: `filler-${i}`,
    src: "",
    title: "",
    artist: "",
    topTracks: ["", "", ""],
  }));

  const displayAlbums = [...shuffledFav, ...fillerAlbums];
  displayAlbums.forEach((album, index) => {
    const animationDelay = Math.min(index, 20) * 50;
    const card = document.createElement("div");
    card.className = "album-card relative aspect-square overflow-hidden group";
    card.style.animationDelay = `${animationDelay}ms`;
    card.innerHTML = `
        <img
            src="${album.src}"
            alt="${album.title}"
            class="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
        />

        <div class="absolute inset-0 bg-white text-black p-6 flex flex-col justify-center items-center
            opacity-0 
            transition-all duration-400 delay-1200 ease-out
            group-hover:opacity-100 
            group-hover:duration-5 group-hover:delay-0 group-hover:ease-linear"
        >
            <div class="text-center w-full">
                <h3 class="font-serif text-lg font-bold leading-tight mb-1">
                    ${album.title}
                </h3>
                <p class="text-xs uppercase tracking-widest text-stone-500 mb-4 border-b border-stone-200 pb-2">
                    ${album.artist}
                </p>
                <div class="space-y-1">
                    <div class="flex items-center justify-center gap-1 text-stone-400 mb-2">
                        <span class="text-[10px] uppercase tracking-wider">
                            My Picks
                        </span>
                    </div>
                    <ul class="text-sm font-sans font-medium text-stone-800 space-y-1">
                        ${album.topTracks
                          .map(
                            (track, i) => `
                            <li class="truncate">${i + 1}. ${track}</li>
                        `,
                          )
                          .join("")}
                    </ul>
                </div>
            </div>
        </div>
    `;

    gridContainer.appendChild(card);
  });
});
