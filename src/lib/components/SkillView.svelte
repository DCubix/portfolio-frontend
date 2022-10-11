<script lang="ts">
    import type { Skill } from "../controller/SkillsController";

    export let skill: Skill;
</script>

<div class="text-cyan-400 border-cyan-400 border-2 px-2 py-1 m-0.5 rounded-md">
    {skill.name}
</div>