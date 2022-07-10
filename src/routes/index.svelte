<script lang="ts">

    import {Audio} from '../stores/stores';
    import {detunedSaws} from '../lib/engine/Synths';
    import {el, type NodeRepr_t} from '@elemaudio/core';
    import { fade } from 'svelte/transition';

    function handleClick(ev:MouseEvent){

            $Audio.render( {
                L:detunedSaws( { ampMod: el.cycle(1) }, el.const( {key: 'L1', value: 65.41} ) ),
                R:detunedSaws({ ampMod: el.cycle(0.5) }, el.const( {key: 'R1', value: 65.41} ) )
            } )

    }

</script>

<main style="transform-origin: top left;transform: scale(0.8)" >
    <section class="section p-0">
        <div id='header' >
            <div class="notification is-light title is-3">
                ⦿ SvelteKit ⦿ Elementary ⦿ Bulma
            </div>
        </div>
        <h1 class="notification is-dark subtitle">A Starting Point for Audio PlugIn Development</h1>
        {#if $Audio}
            <button class="button is-primary is-rounded" on:click={handleClick} in:fade>
            Start Audio
            </button>
        {/if}
    </section>
</main>


<style>
    main {
        text-align: left;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }

</style>
