<template>
    <div class="about">
        <h1 class="display-5 text-center m-4 con">
            A B O U T
            <hr />
        </h1>
        <!-- <h1>A B O U T</h1> -->
        <div class="about">
            <div class="row roo g-0 p-3">
                <div class="col-md-5">
                    <img loading="lazy" src="https://i.postimg.cc/PqnqmW58/IMG-1171.jpg"
                        class="about-img img-fluid rounded-1 shadow" alt="about-IMG" />
                </div>
                <div class="col-md-7 p-2">
                    <div class="card-body text-center mid">
                        <h4 class="card-title display-6" style="color: #92700f;">
                            L I L Y <br />
                            J E W E L S
                            <hr />
                        </h4>
                        <h5 class="card-text p-5">
                            All of our Jewellery is made with a Stainless Steel base and a 14k
                            or 18k gold plating, making them completely Water and Tarnish
                            Proof.</h5> 
                            <div class="container ab">
                        <h5 class="sub p-1">DURABLE:</h5> Stainless steel is resistant to rust. It ranks 6 on
                        the MOH (Mineral Hardness), while other metals such as silver
                        ranks at 2.5. That means stainless steel is harder and can last
                        longer than other metals such as silver and brass.
                        <h5 class="sub p-2">DOESN'T TARNISH:</h5> Stainless steel doesn't tarnish because of an
                        invisible layer of chromium that prevents oxidation from
                        occurring. If you're tired of high-maintenance jewellery, stick
                        with stainless steel as it is resistant to rust, discoloration and
                        oxidization.
                        <h5 class="sub p-2">ENVIROMENTAL FRIENDLY:</h5> Stainless Steel is 100% recyclable and is
                        therefore a green product. Stainless Steel manufacturing saves
                        non-renewable resources such as gold and silver. Compared to other
                        options, stainless steel produces less waste during the
                        manufacturing proces.
                        <h5 class="sub p-2">HYPOALLERGENIC:</h5>Stainless Steel is also Hypoallergenic, allowing
                        almost everyone to be able to wear our jewellery without
                        irritation or infection. </div>
                        <p class="card-text">
                            <small class="text-body-secondary"></small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- featured products -->
        <h1 class="display-5 text-center m-4 con">
            F E A T U R E D
            <hr />
        </h1>
        <div class="card-group m-5">
            <div class="card m-1 shadow">
                <img src="https://i.postimg.cc/1X2HjZxG/LJ10s.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-center">SALE</h5>
                    <p class="card-text text-center">
                        All of our Jewellery is made with a Stainless Steel base and a 14k or 18k gold plating, making them
                        completely Water and Tarnish Proof.
                    </p>
                </div>
                <div class="d-grid">
                    <a class="btn view rounded-1" role="button" href="/src/components/Products.vue">V I E W</a>
                </div>
            </div>
            <div class="card m-1 shadow">
                <img src="https://i.postimg.cc/2y2rf2j8/p2s.jpg" class="card-img-top" alt="..." loading="lazy" />
                <div class="card-body">
                    <h5 class="card-title text-center">SALE</h5>
                    <p class="card-text text-center">
                        All of our Jewellery is made with a Stainless Steel base and a 14k or 18k gold plating, making them
                        completely Water and Tarnish Proof.
                    </p>
                </div>
                <div class="d-grid">
                    <a class="btn view rounded-1" role="button" href="./html/products.html">V I E W</a>
                </div>
            </div>
            <div class="card m-1 shadow">
                <img src="https://i.postimg.cc/43gfVK0G/LJ7s.jpg" class="card-img-top" alt="..." loading="lazy" />
                <div class="card-body">
                    <h5 class="card-title text-center">SALE</h5>
                    <p class="card-text text-center">
                        All of our Jewellery is made with a Stainless Steel base and a 14k or 18k gold plating, making them
                        completely Water and Tarnish Proof.
                    </p>
                </div>
                <div class="d-grid">
                    <a class="btn view rounded-1" role="button" href="/products">V I E W</a>
                </div>
            </div>
        </div>
        <!-- next page button -->
        <div class="d-grid col-3 mx-auto m-4">
            <a class="btn next rounded-1" role="button" href="/products">VIEW ALL PRODUCTS</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .next {
    background-color: #f4cea9;
  }
  .next:hover {
    background-color: #e1bd99;
    border: 1.5px solid black;
    padding: 1rem;
    transition: 0.7s 
  }
  .ab{
    padding-left: 5rem;
    padding-right: 5rem;
  }
  .con{
  color: #92700f;
}
.view {
    background-color: #f4cea9;
  }
  .view:hover {
    background-color: #e1bd99;
    border: 1px solid black;
  }
  </style>