new Vue({
    el: '#app',
    data: {
        text : 'hello World!',
        input: 'v-bind'
    },
    methods: {
        changeValue: function(event) {
            this.text = event.target.value;
        }
    }
});