<script lang="ts">
	import { Link } from 'svelte-routing';
	import { person } from '../../data/persons';
	import { List, Li, Input, Label, Search } from 'flowbite-svelte';

	let user = person;
	let search = '';

	$: filteredPersons = user.filter((person) => {
		const fullname = person.fname + person.lname;
		return fullname.toLocaleLowerCase().includes(search.toLocaleLowerCase());
	});
</script>

<main>
	<div class="mb-2">
		<Input type='search' bind:value={search} placeholder="search user" />
	</div>
<div class="mx-2 flex h-screen w-[350px] flex-col overflow-scroll rounded-lg bg-white px-2 scrollbar-hide">
	{#each filteredPersons as person (person.id)}
	
			<List tag="ul" list="none" class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
				<Li class="pb-3 sm:pb-4" id="photo">
					<div
						class="flex items-center space-x-4 px-1 hover:border-l-2 hover:border-l-[#46B2CC] active:border-l-[#46B2CC] active:bg-neutral-200 rtl:space-x-reverse"
					>
						<div class="flex-shrink-0">
							<img class="h-8 w-8 rounded-full" src={person.photo} alt={person.fname} />
						</div>
						<div></div>
						<div class="min-w-0 flex-1">
							<p class="truncate text-sm font-medium text-gray-900 dark:text-white">
								{person.fname}
								{person.lname}
							</p>
							<p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
								${person.money}
							</p>
						</div>
					</div>
				</Li>
			</List>
		
	{/each}</div>
</main>

<style>
</style>
