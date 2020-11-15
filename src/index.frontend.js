// This script is for the frontend of the playlist block
import { seconds_to_minutes, minutes_to_seconds } from './helpers/time_helpers.js'

document.addEventListener("DOMContentLoaded", function () {
	const playlists = document.getElementsByClassName("wp-block-create-block-playlist");
	Array.from(playlists).forEach(playlist_node => {
		Array.from(playlist_node.getElementsByTagName("a")).forEach(anchor => anchor.setAttribute("target", "_blank"));
		const url = playlist_node.src;
		const audioControls = playlist_node.getElementsByClassName("audio-controls")
		const player = playlist_node.getElementsByTagName("audio")[0];
		playlist_node.getElementsByClassName("back-5")[0].onclick = () => { player.currentTime = player.currentTime - 5; };
		playlist_node.getElementsByClassName("forward-5")[0].onclick = () => { player.currentTime = player.currentTime + 5; };
		const playlist = [];
		player.ontimeupdate = () => {
			const currentTime = player.currentTime;
			playlist.forEach(record => {
				record.node.classList.remove("paused");
				if (record.start <= currentTime && record.end >= currentTime && !record.node.classList.contains("clip-playing")) {
					record.node.classList.add("clip-playing");
					playlist_node.insertBefore(audioControls[0], record.node)
				}
				if (record.start > currentTime || record.end < currentTime) {
					record.node.classList.remove("clip-playing");
				};
			});
		}
		player.onpause = () => {
			playlist.forEach(record => {
				record.node.classList.add("paused");
			});
		}

		player.onplay = () => {
			Array.from(playlists).forEach(playlist_node => {
				const otherPlayer = playlist_node.getElementsByTagName("audio")[0];
				if (player != otherPlayer && otherPlayer) otherPlayer.pause();
			});
		}

		Array.from(playlist_node.getElementsByClassName("playlist-clip")).forEach(clip_node => {
			const start = minutes_to_seconds(clip_node.dataset.playlistClipStart);
			const end = minutes_to_seconds(clip_node.dataset.playlistClipEnd);
			playlist.push({ start, end, node: clip_node });
			clip_node.addEventListener("click", () => {
				if (!clip_node.classList.contains('clip-playing')) {
					player.currentTime = start;
					player.play();
				}
				else if (clip_node.classList.contains('paused')) {
					player.play();
				}
				else {
					player.pause();
				}
			});
		})
	});
});