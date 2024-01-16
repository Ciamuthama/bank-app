<script lang='ts'>
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
	import Navigation from '../navigation/navigation.svelte';

	
	let selected: any;
	let countries = [
		{ value: 'us', name: 'United States' },
		{ value: 'ca', name: 'Canada' },
		{ value: 'fr', name: 'France' }
	];

	let position = [
		{ id: 1, value: 'sm', name: 'Sales manager' },
		{ id: 2, value: 'cs', name: 'Customer service' },
		{ id: 3, value: 'gm', name: 'General manager' }
	];

	let select = 1;
</script>

<div>
	<form>
		<div class="w-full">
			<div class="mb-6 grid md:grid-cols-2">
				<div class="flex flex-wrap gap-10">
					<div class="w-52">
						<Label for="first_name" class="mb-2">First name</Label>
						<Input class="w-52" type="text" id="first_name" placeholder="Tommie" required />
					</div>
					<div class="w-52">
						<Label for="last_name" class="mb-2">Last name</Label>
						<Input class="w-52" type="text" id="last_name" placeholder="Shurtleff" required />
					</div>
					<div class="w-52">
						<Label for="company" class="mb-2">Birthday</Label>
						<Input type="date" class="w-52" placeholder="12/10/2023" />
					</div>
					<div class="w-52">
						<Label>
							City, country
							<Select class="mt-2 w-52" items={countries} bind:value={selected} />
						</Label>
					</div>
					<div class="w-52">
						<Label for="email" class="mb-2">Email address</Label>
						<Input class="w-52" type="email" id="email" placeholder="rddesign@att.net" required />
					</div>
					<div class="w-52">
						<Label for="website" class="mb-2">Address</Label>
						<Input class="w-52" type="url" id="website" placeholder="99 Sierra Ave." required />
					</div>
					<div class="w-52">
						<Label for="visitors" class="mb-2">Position</Label>
						<Select class="mt-2 w-52" items={position} bind:value={selected} />
					</div>
				</div>
				<div class="flex flex-col gap-1"><Avatar
					src="https://webix.com/demos/bank-app/data/photos/tommie_1.jpg"
					rounded
					class="h-[259px] w-[259px]"
				/>
				<MultiSelect items={countries} bind:value={selected} class='w-[259px]' size="sm" />
			
			</div>
			</div>

			<div class="flex flex-col">
				<Label for="example" class="mb-2">Notifications
				</Label>
				<div class="flex flex-row gap-2 mb-2">
					<Radio name="example" bind:group={select} value={1}>Yes</Radio>
					<Radio name="example" value={2}>No</Radio>
				</div>
			</div>
			<div>
				<label for="editor" class="mb-2 font-semibold text-sm">Notes</label>
				<Textarea id="editor" rows="8" col='4' class="mb-4" placeholder="Write a comment">
					<Toolbar slot="header" embedded>
						<ToolbarGroup>
							<ToolbarButton name="Attach file"
								><PaperClipOutline class="h-5 w-5 rotate-45" /></ToolbarButton
							>
							<ToolbarButton name="Embed map"><MapPinAltSolid class="h-5 w-5" /></ToolbarButton>
							<ToolbarButton name="Upload image"><ImageOutline class="h-5 w-5" /></ToolbarButton>
						</ToolbarGroup>
						<ToolbarGroup>
							<ToolbarButton name="Format code"><CodeOutline class="h-5 w-5" /></ToolbarButton>
							<ToolbarButton name="Add emoji"><FaceGrinOutline class="h-5 w-5" /></ToolbarButton>
						</ToolbarGroup>
						<ToolbarButton name="send" slot="end"
							><PapperPlaneOutline class="h-5 w-5 rotate-45" /></ToolbarButton
						>
					</Toolbar>
				</Textarea>
				<div class="float-right"><Button class='bg-neutral-100'><h2 class="text-[#46B2CC]">Reset</h2></Button>
				<Button class='bg-neutral-100'><h2 class="text-[#46B2CC]">Save</h2></Button></div>
			</div>
		</div>
	</form>
</div>
