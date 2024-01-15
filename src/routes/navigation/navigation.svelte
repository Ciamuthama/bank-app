<script lang="ts">
  import { Navbar, NavUl, NavHamburger,  Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  
  let activeClass = 'flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
  let nonActiveClass = 'flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700';
</script>

<div>
   
            <Sidebar  {activeClass} {nonActiveClass}>
                <NavHamburger/>
                <SidebarWrapper>
                  <SidebarGroup>
                    <SidebarItem label="Dashboard" href="/">
                      
                    </SidebarItem>
                    <SidebarItem label="Accordion" href="/docs/components/accordion">
                     
                    </SidebarItem>
                    <SidebarItem label="Alert" href="/docs/components/alert">
                     
                    </SidebarItem>
                    <SidebarItem label="Sidebar" href="/docs/components/sidebar">
                     
                    </SidebarItem>
                    <SidebarItem label="Badge" href="/docs/components/badge">
                     
                    </SidebarItem>
                  </SidebarGroup>
                </SidebarWrapper>
              </Sidebar>
        
</div>

