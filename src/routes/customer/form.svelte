<script lang="ts">
	import {
		Input,
		Label,
		Helper,
		A,
		Select,
		Avatar,
		Radio,
		Textarea,
		Toolbar,
		ToolbarGroup,
		ToolbarButton,
		Button,
		MultiSelect
	} from 'flowbite-svelte';
	import {
		PaperClipOutline,
		MapPinAltSolid,
		ImageOutline,
		CodeOutline,
		FaceGrinOutline,
		PapperPlaneOutline
	} from 'flowbite-svelte-icons';
	import { marked } from 'marked';
	import Navigation from '../navigation/navigation.svelte';
	import { person } from '../../data/persons';
	import { onMount } from 'svelte';
	import Persons from '../transaction/persons.svelte';
	
	import { pushState } from '$app/navigation';

	let selected: [];
	let onePerson = 1;


	const nextUser = () => {
		return (onePerson = (onePerson % person.length) + 1);
	};



	let select = 1;
	let select2 = 2;
	const tags = [
		{ value: '1', name: 'New', color: '#8664C6' },
		{ value: '2', name: 'Customer', color: '#BCAAE0' },
		{ value: '3', name: 'Supplier', color: '#1CA1C1' },
		{ value: '4', name: 'Discount', color: '#5ABBD2' },
		{ value: '5', name: 'Old Buddy', color: '#FDBF4C' },
		{ value: '6', name: 'Avid Supporter', color: '#F8643F' }
	];

	const positions = [
		{ value: '$empty', name: '-- Not selected --', $empty: true },
		{ value: '1', name: 'Sales manager', color: '#8664C6' },
		{ value: '2', name: 'Customer service', color: '#1CA1C1' },
		{ value: '3', name: 'General manager', color: '#F8643F' }
	];

	const cities = [
	{ value:"$empty", name:"-- Not selected --", $empty:true },
	{ value:"1", name:"Tirane, Albania" },
	{ value:"2", name:"Buenos Aires, Argentina" },
	{ value:"3", name:"Canberra, Australia" },
	{ value:"4", name:"Vienna, Austria" },
	{ value:"5", name:"Minsk, Belarus" },
	{ value:"6", name:"Brussels, Belgium" },
	{ value:"7", name:"Brasilia, Brazil" },
	{ value:"8", name:"Ottawa, Canada" },
	{ value:"9", name:"Beijing, China" },
	{ value:"10", name:"Prague, Czech Republic" },
	{ value:"11", name:"Copenhagen, Denmark" },
	{ value:"12", name:"Cairo, Egypt" },
	{ value:"13", name:"Helsinki, Finland" },
	{ value:"14", name:"Paris, France" },
	{ value:"15", name:"Tbilisi, Georgia" },
	{ value:"16", name:"Berlin, Germany" },
	{ value:"17", name:"New Delhi, India" },
	{ value:"18", name:"Dublin, Ireland" },
	{ value:"19", name:"Rome, Italy" },
	{ value:"20", name:"Tokyo, Japan" },
	{ value:"21", name:"Wellington, New Zealand" },
	{ value:"22", name:"Seoul, Republic of Korea" },
	{ value:"23", name:"Madrid, Spain" },
	{ value:"24", name:"Stockholm, Sweden" },
	{ value:"25", name:"Washington, United States" }
];
</script>

<div class="h-screen overflow-scroll scrollbar-hide">
	{#each person as user}
		{#if user.id === onePerson}
			<div class="h-screen overflow-scroll scrollbar-hide">
				<form>
					<div class="mx-auto w-full">
						<div class="mb-2 flex place-content-between">
							<div class="flex flex-wrap gap-x-10">
								<div class="w-64">
									<Label for="first_name" class="mb-1 ">First name</Label>
									<Input
										class="w-64"
										type="text"
										id="first_name"
										value={user.fname}
										placeholder={user.fname}
										required
									/>
								</div>
								<div class="w-64">
									<Label for="last_name" class="mb-1">Last name</Label>
									<Input
										class="w-64"
										type="text"
										id="last_name"
										value={user.lname}
										placeholder={user.lname}
										required
									/>
								</div>
								<div class="w-64">
									<Label for="company" class="mb-1">Birthday</Label>
									<Input
										type="date"
										class="w-64 bg-neutral-100"
										value={user.birthday}
										placeholder={user.birthday}
									/>
								</div>
								<div class="w-64">
									<Label>
										City, country
										<Select class="mt-1 w-64 " items={cities} value={user.city} />
									</Label>
								</div>
								<div class="w-64">
									<Label for="email" class="mb-1">Email address</Label>
									<Input class="w-64" type="email" id="email" placeholder={user.email} required />
								</div>
								<div class="w-64">
									<Label for="website" class="mb-1">Address</Label>
									<Input class="w-64" type="url" id="website" placeholder={user.address} required />
								</div>
								<div class="w-64">
									<Label for="visitors" class="mb-1">Position</Label>
									<Select
										class="mt-2 w-64"
										items={positions}
										value={user.position}
										placeholder="Select position"
									/>
								</div>
							</div>
							<div class="flex flex-col gap-1">
								<Avatar src={user.photo} rounded class="h-[259px] w-[259px]" />
								<MultiSelect items={tags} value={user.tags} class="w-[259px]" size="sm" />
							</div>
						</div>

						<div class="flex flex-col">
							<Label for="example" class="mb-2">Notifications</Label>
							<div class="mb-2 flex flex-row gap-2">
								<Radio name="example" bind:group={select} value={user.notifications}>Yes</Radio>
								<Radio name="example" bind:group={select2} value={user.notifications}>No</Radio>
							</div>
						</div>
					</div>
				</form>
				<button on:click={nextUser} class="flex items-center gap-2 ">
					<Avatar  src={person[(onePerson % person.length)].photo} rounded class="h-[50px] w-[50px]" />
					<h2 class="text-base font-bold text-black">
						{person[(onePerson % person.length)].fname}
					</h2>
				</button>
				<div class="float-right">
					<Button class="bg-neutral-100 hover:bg-neutral-200"
						><h2 class="text-[#46B2CC]">Reset</h2></Button
					>
					<Button class="bg-neutral-100 hover:bg-neutral-200"
						><h2 class="text-[#46B2CC]">Save</h2></Button
					>
				</div>
				<div>
					<label for="editor" class="mb-2 text-sm font-semibold">Notes</label>
					<Textarea
						id="editor"
						rows="5"
						col="4"
						class="mb-4"
						value={user.notes.normalize()}
						placeholder={user.notes.normalize()}
					>
						<Toolbar slot="header" embedded class="h-5 p-1">
							<ToolbarGroup>
								<ToolbarButton name="Attach file"
									><PaperClipOutline class="h-3 w-3 rotate-45" /></ToolbarButton
								>
								<ToolbarButton name="Embed map"><MapPinAltSolid class="h-3 w-3" /></ToolbarButton>
								<ToolbarButton name="Upload image"><ImageOutline class="h-3 w-3" /></ToolbarButton>
							</ToolbarGroup>
							<ToolbarGroup>
								<ToolbarButton name="Format code"><CodeOutline class="h-3 w-3" /></ToolbarButton>
								<ToolbarButton name="Add emoji"><FaceGrinOutline class="h-3 w-3" /></ToolbarButton>
							</ToolbarGroup>
							<ToolbarButton name="send" slot="end"
								><PapperPlaneOutline class="h-3 w-3 rotate-45" /></ToolbarButton
							>
						</Toolbar>
					</Textarea>
				</div>
			</div>
		{/if}
	{/each}
</div>
