<script lang="ts">
    import me from './assets/me.jpg';
    import { GithubIcon, LinkedinIcon, MailIcon, LinkIcon } from 'svelte-feather-icons';
    import Card from './lib/components/Card.svelte';
    import { SkillController } from './lib/controller/SkillsController';
    import SkillView from './lib/components/SkillView.svelte';
    import Loader from './lib/components/Loader.svelte';
    import { ProjectController } from './lib/controller/ProjectController';
    import Image from './lib/components/Image.svelte';
</script>

<main>
    <div class="md:w-3/5 md:mx-auto p-4">
        <Card>
            <img src={me} alt="Diego Lopes" class="w-20 h-20 md:w-32 md:h-32 rounded-full drop-shadow-xl" />
            <div class="flex flex-col justify-center ml-6">
                <h4 class="m-0 font-bold tracking-tight text-2xl md:text-4xl">Diego Lopes</h4>
                <h5 class="m-0 mb-2 font-normal md:text-xl">Software Developer</h5>
                <ul class="flex gap-3">
                    <li><a href="https://github.com/DCubix" title="GitHub" target="_blank" class="text-cyan-400 inline-block"><GithubIcon size="24" /></a></li>
                    <li><a href="https://www.linkedin.com/in/diego-lopes-a47056177/" title="LinkedIn" target="_blank" class="text-cyan-400 inline-block"><LinkedinIcon size="24" /></a></li>
                    <li><a href="mailto:diego95lopes@gmail.com" title="E-mail" target="_blank" class="text-cyan-400 inline-block"><MailIcon size="24" /></a></li>
                </ul>
            </div>
        </Card>

        <div class="flex flex-col md:flex-row">
            <Card style="flex-1" title="Hello!">
                <div>
                    <p class="text-justify">
                        I'm a software developer from Brazil that loves to code.
                    </p>
                    <p class="text-justify">
                        I enjoy doing mobile and web dev, but I really have a passion for
                        low level C++ coding coupled with computer graphics. However I do mobile dev and also some web dev for a living.
                    </p>
                </div>
            </Card>
            <Card style="flex-1 md:flex-none md:w-72" title="Skills">
                {#await SkillController.fetch()}
                    <Loader />
                {:then value}
                    <div class="flex flex-wrap">
                        {#each value as skill}
                            <SkillView skill={skill} />
                        {:else}
                            <span class="text-gray-500">No skills found.</span>
                        {/each}
                    </div>
                {:catch error}
                    <span class="text-gray-500">Failed to fetch skills.</span>
                {/await}
            </Card>
        </div>

        <h4 class="mx-8 my-5 font-bold tracking-tight text-2xl md:text-3xl">My Work</h4>

        <div class="grid grid-cols-1 md:grid-cols-2 place-content-center">
            {#await ProjectController.fetch()}
                <Loader />
            {:then value}
                {#each value as project}
                    <Card style="flex-1" title={project.title}>
                        <div class="flex flex-col">
                            <p>
                                {project.description}
                                <a href={project.url} target="_blank" class="text-cyan-400 flex items-center"><LinkIcon size="16" /> More Info</a>
                            </p>
                            <div class="flex flex-row flex-wrap">
                                {#each project.images as image}
                                    <Image src={image} />
                                {/each}
                            </div>
                        </div>
                    </Card>
                {:else}
                    <span class="text-gray-500">No projects found.</span>
                {/each}
            {:catch error}
                <span class="text-gray-500">Failed to fetch projects.</span>
            {/await}
        </div>
    </div>
</main>
