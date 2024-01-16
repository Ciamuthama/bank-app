import type { PageLoad } from '../$types';

import { person } from '../../../data/persons';

export const load = (() => {
	return {
		userInfo: [{
			person
		}]
		
	};
}) satisfies PageLoad;


