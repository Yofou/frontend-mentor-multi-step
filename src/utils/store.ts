import { writable, derived } from 'svelte/store'
import Personal from '../components/FormPages/Personal.svelte'
import { type Type } from './types'
import type { SvelteComponent } from 'svelte';
import SelectPlan from '../components/FormPages/SelectPlan.svelte'
import PickAddon from '../components/FormPages/PickAddon.svelte'
import Summary from '../components/FormPages/Summary.svelte'
import { type AddonsType, type PlansType } from '../utils/enums'
import ThankYou from '../components/FormPages/ThankYou.svelte'

const STEPS = ['Your Info', 'Select Plan', 'Add-Ons', 'Summary', 'ThankYou'];
const PAGE: Type<SvelteComponent>[] = [Personal, SelectPlan, PickAddon, Summary, ThankYou]

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


export type FormData = {
	name: string,
	email: string,
	phoneNumber: string,
	plan: PlansType[keyof PlansType] | undefined,
	addons: AddonsType[keyof AddonsType][],
	isMonthly: boolean,
}

export const formData = writable<FormData>({
	email: '',
	name: '',
	phoneNumber: '',
	plan: undefined,
	addons: [],
	isMonthly: true,
})

export const pageStage = getPageStage();
