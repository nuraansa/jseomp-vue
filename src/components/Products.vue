<template>
    <div class="products">
        <div class="container-fluid">
            <h1 class="display-5 text-center m-4 con">P R O D U C T S</h1>
            <hr />
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 row-cols-sm-1 g-4">
                    <div class="col p-2" v-for="item in Products" :key="item.id">
                        <div class="card h-100 border border-black shadow-lg">
                            <img :src="item.image" class="card-img-top" alt="product" loading="lazy" id="pics">
                            <div class="card-body">
                                <h5 class="card-title">{{ item.name }}</h5>
                                <p class="card-text">{{ item.description }}</p>
                                <p class="card-text">R{{ item.price }}</p>
                            </div>
                            <div class="card-footer mx-auto">
                                <router-link :to="{
                                    name: 'singleprod',
                                    params: { id: item.id },
                                    query: {
                                        name: item.name,
                                        description: item.description,
                                        image: item.image,
                                        price: item.price,
                                    }
                                }"><button type="button" class="vbtn border border-black shadow rounded-1">
                                        VIEW MORE
                                    </button></router-link>

                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">{{ item.name }}</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <img :src="item.image" class="card-img-top" alt="product" loading="lazy"
                                                    id="pics">
                                                {{ item.description }}
                                            </div>
                                            <div class="modal-footer">
                                                R{{ item.price }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
    },
    methods: {
        showProduct() {
            this.$router.push({
                name: this.name,
                params: this.params.id,
                query: this.query.name
            })
        }
    }
}
</script>

<style scoped>
.vbtn:hover {
    background-color: #e1bd99;
    padding: 1rem;
    transition: 0.7s;
    color: black;
}

.vbtn {
    float: left;
    /* margin: 0.5rem; */
    padding: 10px;
    width: 10rem;
    color: #92700f;
}

.con {
    color: #92700f;
}
</style>