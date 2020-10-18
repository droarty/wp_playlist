/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { ReactComponent as PlayButtonImg } from './images/play-button.svg';
import { ReactComponent as PauseButtonImg } from './images/pause-button.svg';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	let { audio_url, clips } = attributes;
	let r = (
		<div>
			<audio controls src={audio_url}></audio>
			{clips.map((clip, index) => {
				return (
					<div class="playlist-clip" data-playlist-clip-start={clip.start} data-playlist-clip-end={clip.end}>
						<span class="play-clip-button">
							<PlayButtonImg class="play-button" />
							<PauseButtonImg class="pause-button" />
							Start play at: {clip.start}
						</span>
						<div class="playlist-clip-description">
							{clip.description}
						</div>
					</div>
				)
			})}
		</div>
	);
	return r;
}
