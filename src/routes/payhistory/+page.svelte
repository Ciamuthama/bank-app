<script>
    // @ts-nocheck
    
        import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
        import { writable } from 'svelte/store';
        import itemPay from '../../data/ipayments.json'
        import Persons from '../transaction/persons.svelte';
      
        const sortKey = writable(itemPay); 
        const sortDirection = writable(1);
        const sortItems = writable(itemPay.slice()); 
      
       
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
    
    
    
      </script>
      
      <div class="grid grid-flow-col-dense gap-2 mr-2 overflow-scroll scrollbar-hide h-screen w-full bg-white">
    
        <Table hoverable={true} class='scrollbar-hide'>
        <TableHead class='bg-white scrollbar-hide'>
        <TableHeadCell on:click={() => sortTable('date')} class='px-2'>Date</TableHeadCell>
          <TableHeadCell on:click={() => sortTable('quantity')}>Type</TableHeadCell>
          <TableHeadCell on:click={() => sortTable('type')}>item</TableHeadCell>
          <TableHeadCell on:click={() => sortTable('make')}>Quantity</TableHeadCell>
          <TableHeadCell on:click={() => sortTable('cost')}>Cost</TableHeadCell>
        </TableHead>
          <TableBody class='scrollbar-hide'>
          {#each $sortItems as item}
            
              <TableBodyRow class='scrollbar-hide'>
              <TableBodyCell class="px-1 py-2 text-[#475466]">{item.date}</TableBodyCell>
                <TableBodyCell class="px-1 py-2 text-[#475466]">{item.type}</TableBodyCell>
                <TableBodyCell class="px-0 py-2 text-[#475466]">{item.item}</TableBodyCell>
                <TableBodyCell class="px-0 py-2 text-[#475466]">{item.number}</TableBodyCell>
                <TableBodyCell class="px-0 py-2 text-[#475466]">{item.sum}</TableBodyCell>
              </TableBodyRow>
            
          {/each}
        </TableBody>
        
    </Table>
   

<div class="mx-2 flex h-[590] w-[350px] flex-col overflow-scroll bg-white rounded-lg px-2 scrollbar-hide">
  <Persons />
</div>
    </div>