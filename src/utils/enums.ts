
export const Plans = {
	ARCADE: 'arcade',
	ADVANCED: 'advanced',
	PRO: 'pro'
} as const;


export type PlansType = typeof Plans

export const PlansToPricePerMonth = {
	[Plans.ARCADE]: 9,
	[Plans.ADVANCED]: 12,
	[Plans.PRO]: 15
} as const;

export const Addons = {
	ONLINE_SERVICE: 'online',
	LARGER_STORAGE: 'storage',
	CUSTOM_PROFILE: 'profile'
} as const;

export type AddonsType = typeof Addons

export const AddonsToPricePerMonth = {
	[Addons.ONLINE_SERVICE]: 1,
	[Addons.LARGER_STORAGE]: 2,
	[Addons.CUSTOM_PROFILE]: 2
} as const;

export const AddonsToFullTitle = {
	[Addons.ONLINE_SERVICE]: 'Online service',
	[Addons.LARGER_STORAGE]: 'Larger storage',
	[Addons.CUSTOM_PROFILE]: 'Customizable profile'
}
