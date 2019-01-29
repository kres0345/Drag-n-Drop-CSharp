<script>
    export default {
        name: 'vue-title',
        props: ['title'],
        created () {
            document.title = this.title;
        },
        watch: {
            title () {
                // only used when the title changes after page load
                document.title = this.title;
            }
        },
        render () {

        }
    }
</script>