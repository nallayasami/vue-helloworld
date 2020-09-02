new Vue({
    el: '#app',
    data: {
        outputLink: '<p><a href="/">Link from a property using v-html-> Home</a></p>'
    },
    methods: {
        changeValue: function($event) {
            console.log($event);
            this.text = $event.target.value;
            this.input =$event.target.value;
        }
    }
});