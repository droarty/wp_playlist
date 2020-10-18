/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */

import { TextControl } from '@wordpress/components';
import { TextareaControl } from '@wordpress/components';
import { seconds_to_minutes, minutes_to_seconds } from './helpers/time_helpers.js'

export default function Edit({ attributes, className, setAttributes }) {
	let { audio_url, clips } = attributes;
	if (!clips) clips = [];
	let player = 0;
	const setAudioUrl = val => {
		audio_url = val
		setAttributes({ audio_url: val });
	}
	const setPlayer = audio_element => {
		player = audio_element;
	}
	const setClip = (label, index, value) => {
		if (["start", "end"].includes(label) && value.indexOf(" ") > -1) value = seconds_to_minutes(parseInt(player.currentTime));
		let new_clips = [];
		clips[index][label] = value;
		clips.forEach(element => {
			new_clips.push(element);
		});
		setAttributes({ clips: new_clips });
	}
	const addClip = () => {
		setAttributes({ clips: [...clips, { start: "0:00", end: "0:00", description: "" }] })
	}

	return (
		<p className={className}>
			<TextControl
				label="Audio URL"
				value={audio_url}
				onChange={setAudioUrl}
			/>
			<audio controls src={attributes.audio_url} ref={setPlayer}></audio>
			<button onClick={addClip}>Add Clip</button>
			{clips.map((clip, clip_index) =>
				<div class="playlist-clip">
					<div class="start-field">
						<TextControl
							label={`Clip Start (${seconds_to_minutes(clip.start)})`}
							value={clip.start}
							onChange={val => { setClip("start", clip_index, val) }}
						/>
					</div>
					<div class="end-field">
						<TextControl
							label={`Clip End (${seconds_to_minutes(clip.end)})`}
							value={clip.end}
							onChange={val => { setClip("end", clip_index, val) }}
						/>
					</div>
					<div class="end-field">
						Press space bar to enter current time.
					</div>
					<TextareaControl
						label="Clip Description"
						value={clip.description}
						onChange={val => { setClip("description", clip_index, val) }}
					/>
				</div>
			)}
		</p>
	);
}
