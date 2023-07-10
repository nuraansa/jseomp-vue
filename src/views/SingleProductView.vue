<template>
    <div class="container">
        <div class="card m-2 prod">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="$route.query.image" class="card-img-top" alt="product" loading="lazy" id="pics">

                </div>
                <div class="col-md-8 p-5">
                    <div class="card-body">
                        <h5 class="card-title display-5">{{ $route.query.name }}</h5>
                        <br><p class="card-text">{{ $route.query.description }}</p>
                        <br><p class="card-text">R{{ $route.query.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        Products() {
            return this.$store.state.Products
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
    }
}
</script>

<style scoped>
.prod {
    width: 70rem;
}
img{
    width: 25rem;
    height: 100%;
}
.card-text{
    font-size: 1.5rem;
}
</style>