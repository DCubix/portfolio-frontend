<script lang="ts">
    import me from './assets/me.png';
    import { Github, Linkedin, Mail, Link } from 'lucide-svelte';
    import Card from './lib/components/Card.svelte';
    import Loader from './lib/components/Loader.svelte';
    import BlogController from './lib/controller/BlogController';
    import SvelteMarkdown from 'svelte-markdown';
    import Code from './lib/components/Code.svelte';
</script>

<main>
    <div class="md:w-3/5 md:mx-auto p-4">
        <Card>
            <div class="flex flex-col items-center md:flex-row">
                <div class="profile"></div>

                <div class="flex flex-col justify-center items-center md:ml-6 md:items-start">
                    <span class="m-0 mb-2 font-mono font-semibold text-5xl md:text-7xl">Diego Lopes</span>
                    <span class="m-0 mb-3 font-normal text-2xl md:text-2xl">Software Developer</span>
                    
                    <ul class="flex gap-3">
                        <li><a href="https://github.com/DCubix" title="GitHub" target="_blank" class="text-color-theme inline-block"><Github size={32} /></a></li>
                        <li><a href="https://www.linkedin.com/in/diego-lopes-a47056177/" title="LinkedIn" target="_blank" class="text-color-theme inline-block"><Linkedin size={32} /></a></li>
                        <li><a href="mailto:diego95lopes@gmail.com" title="E-mail" target="_blank" class="text-color-theme inline-block"><Mail size={32} /></a></li>
                    </ul>
                </div>
            </div>
        </Card>

        <div class="flex flex-col md:flex-row">
            <Card style="flex-1 md:flex-none md:w-96" title="About Me">
                <p class="text-lg">
                    I am a software developer experienced in mobile app development using Flutter.
                    I also have professional experience with Java and Python for back-end, web applications and REST API development.
                    Although, I love to work with Computer Graphics, Audio processing, low level stuff!
                </p>
            </Card>
            <Card style="flex-1" title="Blog">
                {#await BlogController.fetchSinglePost('test')}
                    <Loader />
                {:then source}
                    <div id="markdown-container">
                        <SvelteMarkdown {source} renderers={{ code: Code }} />
                    </div>
                {:catch error}
                    <span class="text-gray-500">Failed to fetch the blog posts.</span>
                {/await}
            </Card>
        </div>
    </div>
</main>

<style>
    :global(#markdown-container h1) {
        @apply text-3xl mb-2;
    }

    :global(#markdown-container h2) {
        @apply text-2xl mb-2;
    }

    :global(#markdown-container h3) {
        @apply text-xl mb-2;
    }

    :global(#markdown-container h4) {
        @apply text-lg mb-2;
    }

    :global(#markdown-container h5) {
        @apply text-base mb-2;
    }

    :global(#markdown-container h6) {
        @apply text-sm mb-2;
    }

    :global(#markdown-container p,em,strong,blockquote,del,a,table,li,code) {
        @apply text-lg;
    }

    :global(#markdown-container img) {
        @apply p-1 bg-transparent border border-gray-600 rounded max-w-full;
    }

    :global(#markdown-container td,th) {
        @apply border border-gray-500 p-1;
    }

    :global(#markdown-container thead) {
        @apply border border-gray-500 bg-gray-700;
    }

    :global(#markdown-container ul) {
        @apply list-disc list-inside;
    }

    :global(#markdown-container ol) {
        @apply list-decimal list-inside;
    }

    :global(#markdown-container hr) {
        @apply my-4 border-gray-500;
    }

    :global(#markdown-container code) {
        @apply py-1 px-2 bg-gray-700 rounded-md;
    }

    :global(#markdown-container pre) {
        @apply p-4 bg-gray-900 rounded-md my-3;
    }

    :global(#markdown-container pre code) {
        @apply p-0 bg-transparent rounded-none;
    }
</style>
