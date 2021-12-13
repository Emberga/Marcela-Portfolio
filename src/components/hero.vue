<template>
      <!-- Masthead-->
        <header class="masthead  bg-primary text-white text-center" id="home">
            <div class="container mt-0 d-flex align-items-center flex-column">
                <img class="rounded-circle mb-5" src="assets/img/hero.png" alt="..." />
                <h1 class="masthead-heading text-normal mb-0">Hi, I am Marcela Emberga</h1>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <p class="masthead-subheading font-weight-light mb-0">Content Writer - Graphic Artist - Web Developer</p>
            </div>
        </header>
</template>

<style scoped>
    .masthead img{
        width: 400px;
    }
    @media (max-width: 500px){
        .masthead{
            padding-top: 7rem;
        }
        .masthead img{
         width: 250px;
        }
        .masthead .masthead-heading {
            font-size: 1.7rem;
        }
        .masthead .masthead-subheading {
            padding-bottom: 14rem;
        }
    }
</style>