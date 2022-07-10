import { writable, type Writable} from 'svelte/store';
import type {Channels} from '../types/AudioEngine';
import {el} from '@elemaudio/core';
import {default as core} from '@elemaudio/plugin-renderer';
import type PluginRenderer from '@elemaudio/plugin-renderer';

/**
 *
 * Keeping the Renderer Class in a store, adding functionality
 * to it as and when needed.
 */

class AudioEngine {
    nodeRenderer:typeof PluginRenderer

    constructor() {
        this.nodeRenderer = core
    }

     init() : void {
         // Elementary load callback
        this.nodeRenderer.on('load', function() {
            console.log('Elementary loaded')
        });
         // Elementary error reporting
         this.nodeRenderer.on('error', function(e) {
             console.error(e);
         });

         this.nodeRenderer.initialize()
     }
     render(channels: Channels) : void {
        if (!core) return;
        const leftBlockedOut = el.dcblock(channels.L)
        const rightBlockedOut = el.dcblock(channels.R)
        this.nodeRenderer.render(leftBlockedOut, rightBlockedOut)
    }

    mute() : void {
        this.render( {L:el.sm(0), R:el.sm(0)} )
    }
}

export const Audio : Writable<AudioEngine> = writable( new AudioEngine() )
