<template>
    <div>
        <h1>this is Auth page.</h1>
        <button @click="getData()">getdata</button>
    </div>
</template>


<script>
import { API } from 'aws-amplify'
export default {
    data(){
        return {
            apiName: 'mypjapi',
            path: '/search',
            result: ''
        }
    },
    methods: {
        getData(){
            const path = this.path;
            // const myInit = {
            //     headers: {},
            //     response: true,
            // }
            API.get(this.apiName, path).then(res => {
                this.result = res;
                console.log(res);
            }).catch(err=>{
                console.error(err);
            })
        }
    }

}
</script>