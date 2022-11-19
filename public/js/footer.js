const createFooter = () => {

    let footer = document.querySelector('footer');

    footer.innerHTML=`
    <div class="footer-content">
            <img src="img/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">casuales</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>

                </ul>
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">casuales</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>

                </ul>
            </div>
            
        </div>
        <p class="footer-title">about company</p>
        <p class="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit voluptatum a corporis praesentium et totam recusandae omnis nulla, quibusdam nam consequatur cumque, asperiores laboriosam, eveniet exercitationem ab autem dicta accusantium mollitia? Inventore sed perferendis ratione temporibus eligendi ad iusto ipsa placeat, debitis neque voluptatum repellat deleniti facere? Dignissimos in quam numquam minus non tempora repellat, asperiores necessitatibus eveniet molestias saepe eius dolorem soluta recusandae praesentium corrupti excepturi temporibus quibusdam doloremque quod. Odit a corporis aliquam fugiat similique! Velit minus explicabo dolor illum harum quam rem enim laudantium blanditiis delectus aperiam eius corporis sequi molestiae magni, architecto at in maxime dolorem.</p>
        <p class="info"> support emails- help@clothing.com,  costumersupport@clothing.com</p>
        <p class="info">telephone - 180 000 5465 0, 180 65465</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">tprivaxy page</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>

            </div>
        </div>
        <p class="footer-credit">clothing, best apparels online store</p>
    
    `;

}

createFooter();