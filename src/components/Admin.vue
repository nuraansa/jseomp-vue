<template>
  <div class="admin">
    <main>
      <div class="container-fluid admi table-responsive">
        <ul class="nav nav-pills mx-3" id="nav">
          <div class="container-fluid"></div>
          <div class="col m-4">
            <button class="sbtn" id="sort" onclick="sortItems()">S O R T</button>
          </div>
          <div class="col">
            <h1 class="display-5 text-center m-4 con text-nowrap">A D M I N</h1>
            <hr />
          </div>
          <div class="col m-4">
            <a><button type="button" class="abtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                A D D
              </button></a>
          </div>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog i-screen">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <label for="Input1" class="form-label">Item Name</label>
                  <input class="col-12 my-3" id="name" type="text" placeholder="Enter Name" required />
                  <label for="Input2" class="form-label">Item Image URL</label>
                  <input class="col-12 my-3" id="image" type="text" placeholder="Enter URL" required />
                  <label for="Input3" class="form-label">Item Description</label>
                  <input class="col-12 my-3" id="description" type="text" placeholder="Enter Description" required />
                  <label for="Input4" class="form-label">Item Price</label>
                  <input class="col-12 my-3" id="price" type="text" placeholder="Enter Price" required />
                  <div class="modal-footer">
                    <button type="Submit" class="btn sub" data-bs-dismiss="modal" id="submit" value="submit"
                      onclick="addItems()">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
        <table class="table align-middle container table-hover">
          <thead class="table" style="background-color: #e1bd99">
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>
          <tbody id="prodList" class="table" v-for="item in Products" :key="item.id">
            <tr style="font-size: 20px;">
              <td><img :src="item.image" style="width:100px"></td>
              <td>{{ item.name }}</td>
              <td>{{ item.description }}</td>
              <td>R{{ item.price }}</td>
              <td>
                <div class="col m-4">
                  <a><button type="button" class="btn btn-dark btn-sm" data-bs-toggle="modal"
                      data-bs-target="#exampleModal1">
                      EDIT
                    </button></a>
                </div>

                <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog i-screen">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <label for="Input1" class="form-label">Item Name</label>
                        <input class="col-12 my-3" id="nameE" type="text" placeholder="Enter Name" required />
                        <label for="Input2" class="form-label">Item Image URL</label>
                        <input class="col-12 my-3" id="imageE" type="text" placeholder="Enter URL" required />
                        <label for="Input3" class="form-label">Item Description</label>
                        <input class="col-12 my-3" id="descriptionE" type="text" placeholder="Enter Description"
                          required />
                        <label for="Input4" class="form-label">Item Price</label>
                        <input class="col-12 my-3" id="priceE" type="text" placeholder="Enter Price" required />
                        <div class="modal-footer">
                          <button type="Submit" class="btn sub" data-bs-dismiss="modal" id="submit" value="submit">
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td><button class='btn btn-danger' id="close-btn">X</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
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
.con{
  color: #92700f;
}
</style>