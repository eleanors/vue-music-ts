<template>
    <div class="about">
        <cube-button :inline="true">{{content}}</cube-button>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


function extend < T, U > (first: T, second: U): T & U {
        let result = < T & U > {};
        for (let id in first) {
            (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
        console.log('messages...')
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();


interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: "black"});


interface Point {
    readonly x: number;
    readonly y: number;
    readonly z: number;
}
let p1: Point = { x: 10, y: 20, z: 30 };


let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;


async function show(): Promise<number>{

    return 888888
}

async function sexual(): Promise<number>{
    const result = await show()

    return result
}

sexual().then((d) => {

    console.log(d)
}, () => {

})


interface M {
    color: string
    move(): void
}

interface N extends M {
    size: number
    duration(): void
}

abstract class Find implements N{
    public color: string
    public size: number
    protected context: object
    constructor(context: object, color: string, size: number) {
        this.size = size
        this.color = color
        this.context = context
    }
    move(){}
    duration(): number{
        return 1000
    }
    abstract play(): void
}

class Source extends Find {

    music(){
        return this.context
    }
    public play(){

    }
}
new Source({}, '', 77777)




@Component
export default class Music extends Vue {
    @Prop() private msg!: string;
    content = 'This is an about page'
}
</script>
