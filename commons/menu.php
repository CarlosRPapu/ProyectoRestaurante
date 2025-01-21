<?php
// Obtener la página actual
$current_page = basename($_SERVER['PHP_SELF']); // Obtiene el nombre del archivo actual
?>



<nav class="navbar navbar-dark navbar-expand-lg ">
    <div class="container-fluid">
    <img src="/proyectoRestaurante/img/logo1.png" class="img-logo"
            alt="Burgers Carlos">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link house-link <?php echo ($current_page == 'index.php') ? 'active' : ''; ?>" aria-current="page" href="/proyectoRestaurante">
                            <div class="container_icon">
                                <i class="bi bi-house"></i>
                                <i class="bi bi-house-fill"></i>
                            </div>
    
                            Inicio
                    </a>
                </li>

                <li class="nav-item">
                    
                    <a class="nav-link menu-link <?php echo ($current_page == 'menuCompras.php') ? 'active' : ''; ?>" href="./pages/menuCompras.php">
                        <div class="container_icon">
                            <i class="bi bi-menu-button-wide"></i>
                            <i class="bi bi-menu-button-wide-fill"></i>
                        </div>
                            Menú
                    </a>
                </li>
                
                
                <li class="nav-item">
                    
                    <a class="nav-link info-link" href="/BibTum/pages/book/">
                        <div class="container_icon">
                        <i class="bi bi-info-circle"></i>
                        <i class="bi bi-info-circle-fill"></i>
                        </div>
                        Sobre nosotros</a>


                </li>


                
                <li class="nav-item">
                
                    <a class="nav-link contacto-link" href="#contacto">
                        <div class="container_icon">
                        <i class="bi bi-envelope-fill"></i>
                        <i class="bi bi-envelope"></i>
                        </div>
                        Contacto
                    </a>
                </li>
                
            </ul>

        </div>
    </div>
</nav>