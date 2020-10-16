// This script is for the frontend of the playlist block
document.addEventListener("DOMContentLoaded", function () {
	const playlists = document.getElementsByClassName("wp-block-create-block-playlist");
	Array.from(playlists).forEach(playlist_node => {
		const url = playlist_node.src;
		Array.from(playlist_node.getElementsByClassName("playlist-clip")).forEach(clip_node => {
			const start = clip_node.dataset.playlistClipStart;
			const end = clip_node.dataset.playlistClipEnd;
			clip_node.addEventListener("click", () => { alert(`${start}, ${end}`) });
		})
	});
});