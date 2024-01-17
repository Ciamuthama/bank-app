<script>
// @ts-nocheck

    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { writable } from 'svelte/store';
    import IndividualPay from '../../data/ipayments.json'
  
    const sortKey = writable(IndividualPay); 
    const sortDirection = writable(1);
    const sortItems = writable(IndividualPay.slice()); 
  
   
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

   const individual = 1

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
        {#if item.id === individual}
          <TableBodyRow>
          <TableBodyCell>{individual.date}</TableBodyCell>
            <TableBodyCell>{individual.type}</TableBodyCell>
            <TableBodyCell>{individual.item}</TableBodyCell>
            <TableBodyCell>{individual.quantity}</TableBodyCell>
            <TableBodyCell>{individual.cost}</TableBodyCell>
          </TableBodyRow>
        {/if}
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
    
  </Table>