import { writable, derived } from 'svelte/store'
import Personal from '../components/FormPages/Personal.svelte'
import { type Type } from './types'
import type { SvelteComponent } from 'svelte';

const STEPS = ['Your Info', 'Select Plan', 'Add-Ons', 'Summary'];
const PAGE: Type<SvelteComponent>[] = [Personal]

const getPageStage = () => {
	const index = writable(0)
	const { subscribe } = derived([index], ([$index]) => {
		return STEPS.map((title, _index) => {
			return {
				title,
				active: _index === $index,
				page: PAGE[_index],
			}
		})
	});

	return {
		subscribe,
		set: index.set,
		update: index.update
	}
};

export const pageStage = getPageStage();