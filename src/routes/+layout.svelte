<script lang="ts">
	import './styles.css'
	import Person from './transaction/persons.svelte';
	// import Page from './navigation/navigation.svelte'
</script>

<svelte:head>
	<title>Svelte Material UI - Text Field</title>
	
</svelte:head>

<div>
	<div class="float-right">
		<Person/>
	</div>
	<slot/>

</div>
