<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  import { writable } from 'svelte/store';
  import  Persons  from './persons.svelte'
  import { InlineCalendar } from 'svelte-calendar';
	
  function formatDateAndTime() {
  const options = {
    month: 'long',
    day: 'numeric',
    };

  const format={
    hour:'numeric',
    minute:'numeric',
    hours12:false,
  }

  let time = new Date()
  const datePart = time.toLocaleDateString('en-US', options) ;
  const timePart = time.toLocaleTimeString('en-US',format);
  

  return `${datePart} ${timePart}`;
}

const date = formatDateAndTime();



  let items = [
    { id: 1, date: date , type: 'ABC', make: 2017 },
    { id: 2, date: date, type: 'CDE', make: 2018 },
    { id: 3, date: date, type: 'FGH', make: 2019 },
    { id: 4, date: date, type: 'IJK', make: 2020 }
  ];

  const sortKey = writable(items);
  const sortDirection = writable(1); 
  const sortItems = writable(items.slice()); 

  
  const sortTable = (key: string | { id: number; date: string; type: string; make: number; }[]) => {
    
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
        return -direction;
      } else if (aVal > bVal) {
        return direction;
      }
      return 0;
    });
    sortItems.set(sorted);


	};
  const theme = {
  calendar: {
    "width": "320px",
    "maxWidth": "100vw",
    "legend": {
      "height": "20px"
    },
    "font": {
      "regular": "15px",
      "large": "10px"
    },
    shadow: '0px 0px 5px rgba(0, 0, 0, 0.25)'
  }
}

let activeClass = 'flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
let nonActiveClass = 'flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700';
let toggle =''
</script>


<div class="flex justify-around gap-10">
 <div> 
  <div class="flex justify-between">
    <div>
      <h2 class="font-bold text-neutral-600">Transactions</h2>
    </div>
    <div class="flex flex-row gap-5">
  <h2 on:click={() => sortTable('id')}>All</h2>
  <h2 on:click={() => sortTable('type')}>Payment</h2>
  <h2 on:click={() => sortTable('id')}>Incomming</h2>
</div>
</div>

<div>
  <Table hoverable={true}>
  <TableHead>
    <TableHeadCell>#</TableHeadCell>
    <TableHeadCell>Date</TableHeadCell>
    <TableHeadCell>Payment</TableHeadCell>
    <TableHeadCell>Purchase</TableHeadCell>
    <TableHeadCell>+/-</TableHeadCell>
    <TableHeadCell>sum</TableHeadCell>
    <TableHeadCell>Left</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y-6">
    {#each $sortItems as item}
      <TableBodyRow>
        <TableBodyCell>{item.id}</TableBodyCell>
        <TableBodyCell>{item.date}</TableBodyCell>
        <TableBodyCell>{item.type}</TableBodyCell>
        <TableBodyCell>{item.make}</TableBodyCell>
        <TableBodyCell>{item.date}</TableBodyCell>
        <TableBodyCell>{item.type}</TableBodyCell>
        <TableBodyCell>{item.make}</TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
  <div class="flex justify-center w-full fixed">
    <tfoot>
    <tr class="font-semibold text-gray-900 dark:text-white">
      <th scope="row" class="py-3 px-6 text-base">Total</th>
      <td class="py-3 px-6">3</td>
      <td class="py-3 px-6">21,000</td>
    </tr>
  </tfoot></div>
</Table>
</div>
</div>

<div>
<Persons/>
<InlineCalendar {theme}/>
</div>
</div>
