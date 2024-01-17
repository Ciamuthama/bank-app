<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Button
	} from 'flowbite-svelte';
	import { writable } from 'svelte/store';
	import Persons from './persons.svelte';
	import { InlineCalendar } from 'svelte-calendar';
	import Transactions from '../../data/payments.json';

	const sortKey = writable(Transactions);
	const sortDirection = writable(1);
	const sortItems = writable(Transactions.slice());

	const sortTable = (
		key:
			| string
			| {
					type: number;
			  }[]
	) => {
		if ($sortKey === key) {
			sortDirection.update((val) => -val);
		} else {
			sortKey.set(key);
			sortDirection.set(1);
		}
	};

	

	$: {
		const key = $sortKey;
		const direction = $sortDirection;
		const sorted = [...$sortItems].sort((a, b) => {
			const aVal = a[key];
			const bVal = b[key];
			if (aVal < bVal) {
				return -direction ;
			} else if (aVal > bVal) {
				return direction;
			}
			return 0;
		});
		let allowed = [0, 1];
		const filltered = sorted.filter((item) => allowed.includes(item.type));
		sortItems.set(filltered);
	}
	
	const total = Transactions.reduce((total, item) => total + parseInt(item.sum), 0).toFixed(2);
	const left = Transactions.reduce((total, item) => total + parseInt(item.left), 0).toFixed(2);

	const theme = {
		calendar: {
			width: '320px',
			maxWidth: '100vw',
			legend: {
				height: '25px'
			},
			font: {
				regular: '15px',
				large: '10px'
			},
			shadow: '0px 0px 5px rgba(0, 0, 0, 0)'
		}
	};

	let activeClass =
		'flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
	let nonActiveClass =
		'flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700';

	let toggle = false;
	const sortIt = {
		toggle: !toggle ? activeClass : nonActiveClass
	};
</script>

<div class="mr-2 mt-10 flex justify-end gap-5 bg-neutral-100 rounded">
	<div class="bg-white p-2 rounded-lg">
		<div class="mb-3 flex justify-between">
			<div>
				<h2 class="font-bold text-neutral-600">Transactions</h2>
			</div>
			<div class="flex flex-row gap-5">
				<Button
					class="focus-within:shadow-none focus-within:ring-primary-300/0"
					on:click={() => sortTable('id')}
					on:click={() => sortIt}>All</Button
				>
				<Button
					class="focus-within:shadow-none focus-within:ring-primary-300/0"
					on:click={() => sortTable('type')}>Payment</Button
				>
				<Button
					class="focus-within:shadow-none focus-within:ring-primary-300/0"
					on:click={() => sortTable('type')}>Incomming</Button
				>
			</div>
		</div>

		<div class="h-[565px] overflow-scroll scrollbar-hide">
			<Table hoverable={true} class="bg-neutral-400">
				<TableHead>
					<TableHeadCell>#</TableHeadCell>
					<TableHeadCell>Date</TableHeadCell>
					<TableHeadCell>Payment</TableHeadCell>
					<TableHeadCell>Purchase</TableHeadCell>
					<TableHeadCell>+/-</TableHeadCell>
					<TableHeadCell>sum</TableHeadCell>
					<TableHeadCell>Left</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each $sortItems as data}
						<TableBodyRow>
							<TableBodyCell class="px-2 py-2 text-[#475466] text-center">{data.id}</TableBodyCell>
							<TableBodyCell class="px-2 py-2 text-[#475466] text-center">{data.date}</TableBodyCell>
							<TableBodyCell class="flex items-center gap-2 px-2 py-2 text-[#475466]"
								><img
									src={`https://icon.horse/icon/${data.method}.com`}
									width="20"
									height="20"
									alt={data.method}
								/><span>{data.method} {data.number}</span></TableBodyCell
							>
							<TableBodyCell class="px-3 py-2 text-[#475466] text-left"
								>{data.name}/ {data.city}/ {data.country}</TableBodyCell
							>
							<TableBodyCell class="px-2 py-2 text-[#475466] text-center">{data.type}</TableBodyCell>
							<TableBodyCell class="px-2 py-2 text-[#475466] text-center">{data.sum}</TableBodyCell>
							<TableBodyCell class="px-2 py-2 font-medium text-[#475466] text-center"
								>{data.left}</TableBodyCell
							>
						</TableBodyRow>
					{/each}
				</TableBody>
			</Table>
			<div class="fixed flex w-full justify-center"></div>
		</div>
		
			<tfoot class="flex justify-end">
				<tr class="font-semibold text-gray-900 dark:text-white">
					<th scope="row" class="px-6 py-1 text-[14px]">Total</th>
					<td class="px-3 py-1 text-[14px]">${total}</td>
					<td class="px-3 py-1 text-[14px]">${left}</td>
				</tr>
			</tfoot>
		
	</div>

	<div>
		<div class="mb-2 h-[284.5px] overflow-scroll rounded-lg bg-white p-2 scrollbar-hide">
			<Persons />
		</div>
		<div class="bg-white p-2 rounded-lg"><InlineCalendar {theme} /></div>
	</div>
</div>
