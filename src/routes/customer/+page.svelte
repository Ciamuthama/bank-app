<script lang="ts">
	import { Tabs, TabItem, Search, Label } from 'flowbite-svelte';
	import Statistics from './statistics.svelte';
	import Form from './form/+page.svelte';
	import Persons from '../transaction/persons.svelte';
	import Payhistory from './payhistory.svelte';
	import { person } from '../../data/persons';

	let onePerson = 1;

	function handle_search(e: Event): void {
		throw new Error('Function not implemented.');
	}
</script>

<div class="mx-2 flex h-screen justify-between overflow-hidden bg-white scrollbar-hide">
	<div class="flex w-full flex-col">
		<Tabs style="underline">
			<TabItem open title="Information">
				<Form />
			</TabItem>
			<TabItem title="Payment History">
				<Payhistory />
			</TabItem>
			<TabItem title="Statistics">
				<div>
					<Statistics /></div>
			</TabItem>
		</Tabs>
	</div>

	<div>
		<Label for="search">Person</Label>
			<Persons />
	</div>
</div>
