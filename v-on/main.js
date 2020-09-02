new Vue({
    el: '#app',
    data: {
        count : 0,
        coOrdinates: {
            x: 0,
            y: 0,
        },
    },
    methods: {
        increment: function($event) {
            console.log($event);
            this.count++;
        },
        trackMovement: function($event) {
            console.log($event);
            this.coOrdinates.x= $event.offsetX;
            this.coOrdinates.y= $event.offsetY;
        }
    }
});