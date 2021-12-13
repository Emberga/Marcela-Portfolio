<template>
        <section class="page-section portfolio" id="projects">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Projects/Works</h2>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center mb-5 mt-5">
                    <div class="col-md-6 col-lg-4 mb-5 projects">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid w-300" src="assets/img/monster.png" alt="..." />
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/learning-resource.png" alt="..." />
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/find-coach.png" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
          <!-- Portfolio Modals-->
        <!-- Portfolio Modal 1-->
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h5 class="portfolio-modal-title text-secondary text-uppercase mb-0 fs-2">Monster Slayer Game</h5>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img class="img-fluid rounded mb-5" src="assets/img/monster.png" alt="..." />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4">A web-based simple fight game between you and the monster. Wanna play the awesome game?</p>
                                     <div class="d-flex justify-content-evenly">
                                        <a href="https://emberga.github.io/Emberga_Lesson_4-TheMonsterSlayerGame.io/">
                                            <button class="btn btn-live px-3 mt-3 mt-sm-0 flex-wrap mr-2" href="#">
                                                <i class="fas fa-eye"></i>
                                                    Live Demo
                                            </button>
                                        </a>
                                        <a href="https://github.com/Emberga/Emberga_Lesson_4-TheMonsterSlayerGame.io">
                                            <button class="btn btn-dark px-3 mt-3 mt-sm-0 flex-wrap mr-2" href="#" >
                                                <i class="fab fa-github"></i>
                                                    Source Code
                                            </button>
                                        </a>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio Modal 2-->
        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h5 class="portfolio-modal-title text-secondary text-uppercase mb-0 fs-2">Learning Resource App</h5>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img class="img-fluid rounded mb-5" src="assets/img/learning-resource.png" alt="..." />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4">A website which you can store some learning resources online. Want to add some of your resources?</p>
                                    <div class="d-flex justify-content-evenly">
                                        <a href="https://learning-resource-app-36c91.web.app/">
                                            <button class="btn btn-live px-3 mt-3 mt-sm-0 flex-wrap mr-2" href="#">
                                                <i class="fas fa-eye"></i>
                                                Live Demo
                                            </button>   
                                        </a>
                                        <a href="https://github.com/Emberga/Learning-Resource-App.io">
                                            <button class="btn btn-dark px-3 mt-3 mt-sm-0 flex-wrap mr-2" href="#" >
                                            <i class="fab fa-github"></i>
                                                Source Code
                                            </button>
                                        </a>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio Modal 3-->
        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h5 class="portfolio-modal-title text-secondary text-uppercase mb-0 fs-2">Find A Coach Web App</h5>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <img class="img-fluid rounded mb-5" src="assets/img/find-coach.png" alt="..." />
                                    <p class="mb-4">A website which you can find a coach or register as a coach. Wanna be a coach? Come and register with us!</p>
                                    <div class="d-flex justify-content-evenly">
                                        <a href="https://find-a-coach-web-app-93def.web.app/coaches">
                                             <button class="btn btn-live px-3 mt-3 mt-sm-0 flex-wrap mr-2">
                                            <i class="fas fa-eye"></i>
                                                Live Demo
                                            </button>
                                        </a>
                                        <a href="https://github.com/Emberga/Find-a-Coach-Web-App.io">
                                             <button class="btn btn-dark px-3 mt-3 mt-sm-0 flex-wrap mr-2" href="https://github.com/Emberga/Find-a-Coach-Web-App.io" >
                                                <i class="fab fa-github"></i>
                                                    Source Code
                                             </button>
                                        </a>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>
     #projects{
            padding-top: 7rem;
            padding-bottom: 14rem;
        }
    @media (max-width: 500px){
        #projects{
            padding-top: 5rem;
            padding-bottom: 3rem;
        }
    }
   .portfolio .portfolio-item{
        box-shadow: 0 2px 7px 4px  #d8d8d8;
    }
    .btn-live{
         box-shadow: 0 2px 7px 4px  #d8d8d8;
    }
    .portfolio-modal .btn-close{
        font-size: 1rem;
    }
</style>