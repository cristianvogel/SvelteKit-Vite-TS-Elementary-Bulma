<script>
  import "../app.scss";
  import {onDestroy} from 'svelte'
  import {Audio} from '../stores/stores'

  /**
   * initialise Elementary inside the store, just once
   */
  $Audio.init()

  /**
   * Use Svelte's destroy() lifecycle function
   * to do any cleaning up when the plugin is removed
   */

  onDestroy( ()=>{
      // do any cleanup operations here
  })

</script>

<slot />

