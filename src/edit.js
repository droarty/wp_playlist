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

export default function Edit({ attributes, className, setAttributes }) {
	let { audio_url, clips } = attributes;
	const setAudioUrl = val => {
		audio_url = val
		setAttributes({ audio_url: val });
	}
	const setClip = (label, index, value) => {
		let new_clips = [];
		clips[index][label] = value;
		clips.forEach(element => {
			new_clips.push(element);
		});
		setAttributes({ clips: new_clips });
	}
	const addClip = () => {
		setAttributes({ clips: [...clips, { start: "0", end: "0", description: "" }] })
	}
	return (
		<p className={className}>
			Attributes: {JSON.stringify(attributes)}
			<TextControl
				label="Audio URL"
				value={audio_url}
				onChange={setAudioUrl}
			/>
			<audio controls src={attributes.audio_url}></audio>
			<button onClick={addClip}>Add Clip</button>
			{clips.map((clip, clip_index) =>
				<div>
					<TextControl
						label="Clip Start"
						value={clip.start}
						onChange={val => { setClip("start", clip_index, val) }}
					/>
					<TextControl
						label="Clip End"
						value={clip.end}
						onChange={val => { setClip("end", clip_index, val) }}
					/>
					<TextControl
						label="Clip Description"
						value={clip.description}
						onChange={val => { setClip("description", clip_index, val) }}
					/>
				</div>
			)}
		</p>
	);
}
