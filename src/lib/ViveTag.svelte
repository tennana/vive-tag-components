<svelte:options tag="vive-shout" />
<script lang="ts">
  export let text;
  export let type: number = 1;

  let textArray = [];
  $: textArray = text && text.split('') || textArray;
</script>
<span class="vive vive{type}">
{#each textArray as char}
    <span>{char}</span>
{/each}
</span>
<style>
    .vive > span {
        display: inline-block;
        line-height: 90%;
    }

    .vive1 span:nth-child(8n+1) {
        transform: rotate(-10deg);
    }

    .vive1 span:nth-child(8n+2) {
        transform: rotate(10deg);
    }

    .vive1 span:nth-child(8n+3) {
        font-size: 130%;
        transform: rotate(10deg);
    }

    .vive1 span:nth-child(8n+4) {
        transform: rotate(10deg);
    }

    .vive1 span:nth-child(8n+5) {
        transform: rotate(10deg);
    }

    .vive1 span:nth-child(8n+6) {
        transform: rotate(0deg);
    }

    .vive1 span:nth-child(8n+7) {
        font-size: 130%;
        transform: rotate(-5deg);
    }

    .vive1 span:nth-child(8n+8) {
        transform: rotate(10deg);
    }
</style>