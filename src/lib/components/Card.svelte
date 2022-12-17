<script lang="ts">
    export let style: string = '';
    export let title: string = '';
</script>

<div
    class={"p-4 bg-gray-800 rounded-sm border border-gray-700 shadow-sm shadow-black m-1 " + style}
>
    {#if title.trim().length > 0}
        <h4 class="m-0 mb-5 font-medium text-2xl md:text-3xl">{title}</h4>
    {/if}
    <div class="flex flex-col">
        <slot></slot>
    </div>
</div>