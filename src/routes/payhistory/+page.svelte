<script>
// @ts-nocheck

    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { writable } from 'svelte/store';
  
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
    { id: 1, date: date , type: 'ABC', quantity: 2017, cost:'1000' },
    { id: 2, date: date, type: 'CDE', quantity: 2017, cost:'1000' },
    { id: 3, date: date, type: 'FGH', quantity: 2017,cost:'1000' },
    { id: 4, date: date, type: 'IJK', quantity: 2017,cost:'1200' }
  ];

  
    const sortKey = writable('id'); 
    const sortDirection = writable(1);
    const sortItems = writable(items.slice()); 
  
   
    const sortTable = (/** @type {string} */ key) => {
      
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
    }

    const url = 'MasterCard'
  </script>
  
  <Table hoverable={true}>
    <TableHead>
    <TableHeadCell on:click={() => sortTable('date')}>Maker</TableHeadCell>
      <TableHeadCell on:click={() => sortTable('quantity')}>quantity</TableHeadCell>
      <TableHeadCell on:click={() => sortTable('type')}>Type</TableHeadCell>
      <TableHeadCell on:click={() => sortTable('make')}>Make</TableHeadCell>
      <TableHeadCell on:click={() => sortTable('cost')}>Make</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
      {#each $sortItems as item}
        <TableBodyRow>
        <TableBodyCell>{item.date}</TableBodyCell>
          <TableBodyCell>{item.quantity}</TableBodyCell>
          <TableBodyCell>{item.make}</TableBodyCell>
          <TableBodyCell>{item.cost}</TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
    <div>
        <tfoot class="float-right">
        <tr class="font-semibold text-gray-900 dark:text-white">
          <th scope="row" class="py-3 px-6 text-base">Total</th>
          <td class="py-3 px-6">3</td>
          <td class="py-3 px-6">21,000</td>
        </tr>
      </tfoot>
    </div>
    <img src={`https://google.com/s2/favicons?domain=${url}`} alt="img" srcset="">
  </Table>