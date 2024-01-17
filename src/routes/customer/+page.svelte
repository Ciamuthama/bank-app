<script lang="ts">
	import { Tabs, TabItem } from 'flowbite-svelte';
	import Statistics from './statistics.svelte';
	import Form from './form.svelte';
	import Persons from '../transaction/persons.svelte';
	import Payhistory from './payhistory.svelte';
	import { person } from '../../data/persons';

	let onePerson = 1

	const nextUser = () => {
		return onePerson = (onePerson % person.length) +1
	}
</script>


<div class="flex h-screen justify-between mx-2 overflow-hidden bg-white scrollbar-hide">
	<div class="flex flex-col">
		<Persons />
	</div>
	<div class="flex w-full flex-col">
		<Tabs style="underline">
			<TabItem open title="Information">
				<Form />
			</TabItem>
			<TabItem title="Payment History">
				<div class='w-[1000px] mx-auto'>
					<Payhistory />
				</div>
			</TabItem>
			<TabItem title="Statistics">
				<Statistics />
			</TabItem>
		</Tabs>
	</div>
	
</div>
