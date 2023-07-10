<template>
    <main class="bg">
        <div class="contact">
            <h1 class="display-5 text-center con p-4">C O N T A C T</h1>
        </div>
        <!-- forsmspree form -->
        <section class="contact">
            <div class="form text-center d-flex shadow-lg">
                <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mjvdnbjp"
                    method="post" class="forming">
                    <label for="full-name">Full Name</label>
                    <input type="text" name="name" id="full-name" placeholder="First and Last" required />
                    <label for="email-address">Email Address</label>
                    <input type="email" name="_replyto" id="email-address" placeholder="email@gmail.com" required />
                    <label for="message">Message</label>
                    <textarea rows="5" name="message" id="message" placeholder="Type your message here..."
                        required></textarea>
                    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" /><button
                        type="submit" value="Submit" id="send" class="mx-auto">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
/* formspree form */
.form {
    /* width: 500px; */
    background-color: #f4cea9;
    margin-bottom: 2rem;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.forming {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

input {
    width: 80%;
    margin: 0.8rem;
    border: none;
    border-bottom: 2px solid black;
    background-color: rgba(255, 255, 255, 0.625);
    padding: 0.4rem;
}

#send {
    width: 80%;
}

#send:hover {
    background-color: #e1bd99;
    transition: 0.4s
}

textarea {
    width: 80%;
    margin: 0.8rem;
    padding: 0.8rem;
    background-color: rgba(255, 255, 255, 0.625);
    border-bottom: 2px solid black;
}

#send {
    width: 40%;
    margin: 0.2rem;
    height: 3rem;
    background-color: rgba(255, 255, 255, 0.625)
        /* padding: 10px; */
}

.contact {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.con {
    color: #92700f;
}
.bg{
  background-image: url(https://i.postimg.cc/QtqKB98r/ljc2.png);
  background-size: cover;
}
</style>