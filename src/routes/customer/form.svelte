<script>
	import {
		Input,
		Label,
		Helper,
		Button,
		Checkbox,
		A,
		Select,
		Avatar,
		Radio,
        Textarea
	} from 'flowbite-svelte';

	/**
	 * @type {any}
	 */
	let selected;
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
		<div>
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
				<Avatar
					src="https://webix.com/demos/bank-app/data/photos/tommie_1.jpg"
					rounded
					class="h-[259px] w-[259px]"
				/>
			</div>

			<div>
				<Label for="example" class="mb-2">Notifacation</Label>
				<Radio name="example" bind:group={select} value={1}>Yes</Radio>
				<Radio name="example" value={2}>No</Radio>
			</div>
			<div>
				<Label for="textarea-id" class="mb-2">Your message</Label>
				<Textarea id="textarea-id" placeholder="Your message" rows="4" name="message" />
			</div>
		</div>
	</form>
</div>
