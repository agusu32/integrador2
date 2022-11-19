const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="img/dark-logo.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
                <input type="text" class="search-box" placeholder="Buscar disfraz, personaje">
                <button class="search-btn">buscar</button>
        </div>
        <a href="signup.html"><img src="img/user.png" alt=""></a>
        <a href="#"><img src="img/cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="#" class="link">home</a></li>
    <li class="link-item"><a href="#" class="link">disfraces</a></li>
    <li class="link-item"><a href="#" class="link">niños</a></li>
    <li class="link-item"><a href="#" class="link">personajes</a></li>
    <li class="link-item"><a href="#" class="link">promos</a></li>
</ul>
    `;
}

createNav();