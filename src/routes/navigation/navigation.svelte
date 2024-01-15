<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger,  Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import Transaction from '../transaction/+page.svelte'
  let activeClass = 'flex ite.ms-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
  let nonActiveClass = 'flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700';
</script>

<div>
    <Navbar  >
        <NavHamburger  />
        <NavUl >
          <NavLi href="/">Home</NavLi>
          <NavLi href="/transaction">Transaction</NavLi>
          <NavLi href="/customer">Customer</NavLi>
          <NavLi href="/payhistory">Pay History</NavLi>
          <NavLi href="/contact">Contact</NavLi>
        </NavUl>
      </Navbar>
        
</div>

