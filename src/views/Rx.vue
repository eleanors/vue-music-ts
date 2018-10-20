<template>
    <section class="rx-view">
        <h3>Click on 'Count' button to count your clicks</h3>
        <cube-button :inline="true" v-stream:click="count$">Count clicks</cube-button>
        <cube-button :inline="true" v-on:click="clearCounter">Clear counter</cube-button>
        <p class="result">{{result$}}</p>
    </section>
</template>
<script lang="ts">
import {
    filter,
    bufferWhen,
    debounceTime,
    map,
    startWith,
} from 'rxjs/operators';

export default {
    domStreams: ['count$'],
    subscriptions() {
        return {
            result$: this.count$.pipe(
                filter(event => !!event),
                bufferWhen(() => this.count$.pipe(debounceTime(400))),
                map(clicks => clicks.length),
                startWith(0),
            ),
        };
    },
    methods: {
        clearCounter() {
            this.count$.next(null);
        },
    },
};
</script>
<style lang="scss">
.rx-view {
    h3 {
        margin: 0 0 20px;
    }
    .result {
        padding: 10px;
        margin: 20px;
        font-size: 14px;
        margin-right: 10px;
        border-radius: 2px;
    }
}
</style>
