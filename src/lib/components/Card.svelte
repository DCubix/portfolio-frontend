<script lang="ts">
    export let style: string = '';
    export let title: string = '';
</script>

<div
    class={"p-6 bg-gray-700 rounded-lg border border-gray-500 shadow-md drop-shadow-xl m-2 " + style}
>
    {#if title.trim().length > 0}
        <h4 class="m-0 font-bold tracking-tight text-2xl md:text-3xl">{title}</h4>
        <hr class="my-2 h-px bg-gray-500 border-0" />
    {/if}
    <div class="flex items-center">
        <slot></slot>
    </div>
</div>