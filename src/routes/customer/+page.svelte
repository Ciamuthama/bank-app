<script lang="ts">
	import Person from '../transaction/persons.svelte';
	import { Tabs, TabItem } from 'flowbite-svelte';
    import Form from './form.svelte'
</script>

<div>
	<Tabs style="underline">
		<TabItem open title="Information">
			<Form/>
		</TabItem>
		<TabItem title="Payment History">
			<p class="text-sm text-gray-500 dark:text-gray-400">
				
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</TabItem>
		<TabItem title="Statistics">
			<p class="text-sm text-gray-500 dark:text-gray-400">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</TabItem>
	</Tabs>
    
	<Person />
</div>
