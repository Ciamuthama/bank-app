<script lang="ts">
	import './styles.css'
	import Persons from './transaction/persons.svelte';
	
	 import Page from './navigation/navigation.svelte'
</script>

<svelte:head>
	<title>Svelte Material UI - Text Field</title>
	
</svelte:head>

<div class="overflow-y-hidden h-screen bg-neutral-100">
	<div>im the header</div>
	<div class="grid gap-4 grid-flow-col-dense">
		<Page/>
		<slot/>
		<div class="mx-2 flex h-[590] w-[350px] flex-col overflow-scroll bg-white rounded-lg px-2 scrollbar-hide">
			<Persons />
		</div>
	</div>


</div>
