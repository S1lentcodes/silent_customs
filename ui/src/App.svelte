<script lang="ts">
  import { EventHandler, HandleKeyUp } from './utils/eventHandler';
  import { exampleCall } from './utils/mockEvent';
  import DebugStore from './stores/debugStore';
  import ExampleStore from './stores/exampleStore';
  import { fade, fly } from 'svelte/transition';

  const { show, currentIndex } = ExampleStore;

  // Handle events we get from client.lua
  EventHandler();
  // Handle keystrokes from the user when the ui is showing
  // For example if player hits Escape key close the ui
  HandleKeyUp();

  // An example fake/mock client.lua call used when developing ui in browser
  exampleCall();

  let modArray: Array<string> = [
    "Engine 1", "Engine 2", "Engine 3", "Engine 4", "Engine 5", "Engine 6", "Engine 7", "Engine 8", "Engine 9", "Engine 10"
  ];

</script>

{#if $show}
  <main class={`min-h-screen ${DebugStore ? "bg-gray-500": "bg-transparent"}`}>
    <div class="absolute bottom-30 left-5 flex flex-col gap-1">
      <div class="bg-[#141517] px-[0.5rem] py-[0.5rem] w-min flex flex-row gap-2 items-center">
        <p class="text-white font-bold text-lg uppercase">
          Engine
        </p>
        <div class="px-[0.25rem] py-[0.1rem] bg-white">
          <p class="text-black font-bold text-lg uppercase">
            {$currentIndex+1}/{modArray.length}
          </p>
        </div>
      </div>
      <div class="flex flex-row gap-5 items-center">
        {#each modArray.slice($currentIndex) as mod, i}
          <div class={`relative flex flex-col items-center justify-end w-80 ${i==0 ? 'h-52 bg-[#f1e542]': 'h-46 bg-[#444444]'}`} 
            in:fly="{{ y: -50, duration: 300 }}" out:fade="{{duration: 250}}">
            <div class={`absolute top-0 right-0 px-[0.4rem] py-[0.2rem] ${i==0 ? 'bg-[#27ae60]':'bg-[#141517]'}`}>
              <p class="font-bold text-lg text-white">
                {i==0 ? '$0' :'$1000'}
              </p>
            </div>
            <div class="pb-2">
              <p class="font-bold tracking-wider text-2xl">
                {mod}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </main>
{/if}
