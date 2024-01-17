<script lang="ts">
	import { Tabs, TabItem } from 'flowbite-svelte';
	import Statistics from './statistics.svelte';
	import Form from './form.svelte';
	import Persons from '../transaction/persons.svelte';
	import Payhistory from './payhistory.svelte';
	import { person } from '../../data/persons';

	let onePerson = 1;

	
</script>

<div class="mx-2 flex h-screen justify-between overflow-hidden bg-white scrollbar-hide">
	<div class="flex w-full flex-col">
		<Tabs style="underline">
			<TabItem open title="Information">
				<Form />
			</TabItem>
			<TabItem title="Payment History">
				<div class="w-full">
					<Payhistory />
				</div>
			</TabItem>
			<TabItem title="Statistics">
				<div class="w-full"><Statistics /></div>
			</TabItem>
		</Tabs>
	</div>
	<div
		class="mx-2 flex h-[590] w-[350px] flex-col overflow-scroll rounded-lg bg-white px-2 scrollbar-hide"
	>
		<Persons />
	</div>
</div>
