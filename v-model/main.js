new Vue({
    el: '#app',
    data: {
        text : 'hello World!',
        input: 'v-model example text'
    },
    methods: {
        changeValue: function($event) {
            console.log($event);
            this.text = $event.target.value;
            this.input =$event.target.value;
        }
    }
});