/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { ReactComponent as PlayButtonImg } from './images/play-button.svg';
import { ReactComponent as PauseButtonImg } from './images/pause-button.svg';
import { ReactComponent as FFButtonImg } from './images/ff-button.svg';
import Markdown from 'markdown-to-jsx';

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
			<div class="audio_controls">
				<audio controls src={audio_url}></audio>
				<span class="back-5" title="rewind 5 seconds"><FFButtonImg class="rewind-button"></FFButtonImg></span>
				<span class="forward-5" title="fforward 5 seconds"><FFButtonImg></FFButtonImg></span>
			</div>
			{clips.map((clip, index) => {
				return (
					<div class="playlist-clip" data-playlist-clip-start={clip.start} data-playlist-clip-end={clip.end}>
						<span class="play-clip-button">
							<PlayButtonImg class="play-button" />
							<PauseButtonImg class="pause-button" />
							Start play: {clip.start} to {clip.end}
						</span>
						<div class="playlist-clip-description" hidden>
							{clip.description}
						</div>
						<div class="playlist-clip-description-visible">
							<Markdown>{clip.description}</Markdown>
						</div>
					</div>
				)
			})}
		</div>
	);
	return r;
}
