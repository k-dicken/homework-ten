var homeContent = `<!-- Promo Tours -->
<section class="promo-tours">

    <div class="promo israel">
        <p class="title">ISRAEL</p>
        <p class="subtitle">from $1000</p>
        <a class="button tour" id="israel" href="#">LEARN MORE</a>
    </div>

    <div class="promo usa">
        <p class="title">U.S.A</p>
        <p class="subtitle">from $1500</p>
        <a class="button" id="usa" href="#">LEARN MORE</a>
    </div>

    <div class="promo australia">
        <p class="title">AUSTRALIA</p>
        <p class="subtitle">from $1800</p>
        <a class="button" id="australia" href="#">LEARN MORE</a>
    </div>

</section>

<!-- Booking Form -->
<section class="booking-form">

    <p>Booking Form</p>

    <form>

        <div class="row mobile">            
            <input class="text-short" type="text" placeholder="name..." id="name" name="name">

            <input class="text-long" type="text" placeholder="email..." id="email" name="email">
        </div>

        <div class="row mobile">            
            <input class="text-short" type="text" placeholder="country..." id="country" name="country">

            <input class="text-long" type="text" placeholder="hotel..." id="hotel" name="hotel">
        </div>
        
        <div class="row check">        
            <label for="check-in">Check-in </label>
            <input class="check-input" type="date" id="check-in" name="check-in"
            value="yyyy-mm-dd"
            min="2021-01-01" max="2031-12-31">
        </div>

        <div class="row check">        
            <label for="check-out">Check-out</label>
            <input class="check-input" type="date" id="check-out" name="check-out"
            value="yyyy-mm-dd"
            min="2021-01-01" max="2031-12-31">
        </div>

        <div class="row">
            <label for="adults">Adults</label>
            <select class="drop-down" id="adults" name="adults">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8+</option>
            </select>

            <label for="children">Children</label>
            <select class="drop-down" id="children" name="children">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8+</option>
            </select>

            <label for="rooms">Rooms</label>
            <select class="drop-down" id="rooms" name="rooms">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8+</option>
            </select>

        </div>

        <textarea class="message" id="message" name="message" rows="4" cols="50" placeholder="message..."></textarea>

        <input class="submit" type="submit" value="SUBMIT">


        
    </form>

</section>
</div>`
var aboutContent = `<div class="about">
<div class="about-content">
    <div class="underline"><span>ABOUT:</span></div>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="client-quotes">
    <div class="underline"><span>CLIENT QUOTES:</span></div>
    <div class="quote-row">
        <div class="quote-image client1">
        </div>
        <div class="quote-text">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

            <div class="quote-name">
                <h1>- Miranda Brown</h1>
            </div>
        </div>
    </div>

    <div class="quote-row">
        <div class="quote-image client2"></div>
        <div class="quote-text">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            <div class="quote-name">
                <h1>- Johnathan Wes</h1>
            </div>
        </div>
    </div>

</div>

</div>
`
var toursContent = `<!-- Header -->
<header>
    <p>TOURS:</p>
</header>

<!-- 3 Tours Rows -->
<div class="tour-row">
    <div class="tours israel">
        <p class="title">ISRAEL</p>
        <p class="subtitle">from $1000</p>
        <a class="button" id="israel" href="#">LEARN MORE</a>
    </div>

    <div class="tours usa">
        <p class="title">U.S.A</p>
        <p class="subtitle">from $1500</p>
        <a class="button" id="usa" href="#">LEARN MORE</a>
    </div>

    <div class="tours australia">
        <p class="title">AUSTRALIA</p>
        <p class="subtitle">from $1800</p>
        <a class="button" id="australia" href="#">LEARN MORE</a>
    </div>

    <div class="tours new-zealand">
        <p class="title">NEW<br>ZEALAND</p>
        <p class="subtitle">from $1200</p>
        <a class="button" id="newzealand" href="#">LEARN MORE</a>
    </div>

    <div class="tours france">
        <p class="title">FRANCE</p>
        <p class="subtitle">from $2500</p>
        <a class="button" id="france" href="#">LEARN MORE</a>
    </div>

    <div class="tours egypt">
        <p class="title">EGYPT</p>
        <p class="subtitle">from $900</p>
        <a class="button" id="egypt" href="#">LEARN MORE</a>
    </div>

    <div class="tours japan">
        <p class="title">JAPAN</p>
        <p class="subtitle">from $1300</p>
        <a class="button" id="japan" href="#">LEARN MORE</a>
    </div>

    <div class="tours canada">
        <p class="title">CANADA</p>
        <p class="subtitle">from $2000</p>
        <a class="button" id="canada" href="#">LEARN MORE</a>
    </div>

    <div class="tours uae">
        <p class="title">U.A.E</p>
        <p class="subtitle">from $3000</p>
        <a class="button" id="uae" href="#">LEARN MORE</a>
    </div>
</div>
`
var specialoffersContent = `<div class="special-offers">

<div class="offers-content">
    <div class="underline"><span>SPECIAL OFFER(S):</span></div>
    <div class="quote-row">
        <div class="quote-image spain">
        </div>
        <div class="quote-text">
            <div class="underline"><span>BARCELONA, SPAIN</span></div>
            
            <h2>(20% off!)</h2>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

            <a class="button" href="#">LEARN MORE</a>
        </div>
    </div>

    <div class="quote-row">
        <div class="quote-image thai"></div>
        <div class="quote-text">
            <div class="underline"> <span>BANGKOK, THAILAND</span> </div>
            <h2>(10% off!)</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            <a class="button" href="#">LEARN MORE</a>
        </div>
    </div>

</div>

</div>`

var blogContent = `<div class="blog">
<div class="underline"><span>BLOG:</span></div>

<div class="blog-entry">
    <div class="date">
        <p  class="num">06</p>
        <p class="month">JUN</p>
    </div>

    <div class="entry">
        <div class="entry-image"></div>
        <p style="font-size: 15px;">Sed et persipiatis unde omnis iste natus</p>
        <p style="color: #79ADDC; font-size: 13px;" >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
    </div>
</div>

<div class="blog-entry">
    <div class="date">
        <p  class="num">23</p>
        <p class="month">JUN</p>
    </div>

    <div class="entry">
        <div class="entry-image"></div>
        <p style="font-size: 15px;">Sed et persipiatis unde omnis iste natus</p>
        <p style="color: #79ADDC; font-size: 13px;" >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
    </div>
</div>

</div>`

var contactContent = `<div class="contact">
<div class="underline"><span>CONTACT US:</span></div>

<div class="contact-content">
    <div class="left">
        <div class="map"></div>
        <p>
            travel-fly Inc. <br>
            8901 Marmora Road,<br>
            Glasgow, D04 89GR.<br>
            Freephone:+1 800 559 6580<br>
            Telephone:+1 800 603 6035<br>
            FAX:+1 800 889 9898<br>
            E-mail: mail@travelfly.org<br>
        </p>
    </div>

        <form class="right">          
                <input type="text" placeholder="Your name..." id="name" name="name">

                <input type="text" placeholder="Email Address..." id="email" name="email">

                <input type="text" placeholder="Company..." id="company" name="company">

                <textarea id="message" name="message" rows="4" cols="50" placeholder="Message..."></textarea>

                <button class="button">SEND MESSAGE</button>

        </form>
</div>

</div>`


var israelContent = `<div class="packages">
<div class="header israel">
    <p class="title">Israel tour package:</p>
    <p class="subtitle">STARTING FROM $1000 (prices may vary)</p>
</div>


<div class="images">
    <img src="images/tour/tour-israel/israel-tour-01.jpg" alt="">
    <img src="images/tour/tour-israel/israel-tour-02.jpg" alt="">
    <img src="images/tour/tour-israel/israel-tour-03.jpg" alt="">
</div>


<div class="text-section">
    <p class="title">Day #1:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #2:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #3:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<a class="button" href="#">BOOK NOW</a>

</div>`

var usaContent = `<div class="packages">
<div class="header usa">
    <p class="title">U.S.A tour package:</p>
    <p class="subtitle">STARTING FROM $1500 (prices may vary)</p>
</div>


<div class="images">
    <img src="images/tour/tour-usa/usa-tour-01.jpg" alt="">
    <img src="images/tour/tour-usa/usa-tour-02.jpg" alt="">
    <img src="images/tour/tour-usa/usa-tour-03.jpg" alt="">
</div>


<div class="text-section">
    <p class="title">Day #1:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #2:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #3:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<a class="button" href="#">BOOK NOW</a>

</div>`

var australiaContent = `<div class="packages">
<div class="header aus">
    <p class="title">Australia tour package:</p>
    <p class="subtitle">STARTING FROM $1800 (prices may vary)</p>
</div>


<div class="images">
    <img src="images/tour/tour-aus/aus-tour-01.jpg" alt="">
    <img src="images/tour/tour-aus/aus-tour-02.jpg" alt="">
    <img src="images/tour/tour-aus/aus-tour-03.jpg" alt="">
</div>


<div class="text-section">
    <p class="title">Day #1:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #2:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #3:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<a class="button" href="#">BOOK NOW</a>

</div>`

var newzealandContent = `<div class="packages">
<div class="header nz">
    <p class="title">New Zealand tour package:</p>
    <p class="subtitle">STARTING FROM $1200 (prices may vary)</p>
</div>


<div class="images">
    <img src="images/tour/tour-nz/nz-tour-01.jpg" alt="">
    <img src="images/tour/tour-nz/nz-tour-02.jpg" alt="">
    <img src="images/tour/tour-nz/nz-tour-03.jpg" alt="">
</div>


<div class="text-section">
    <p class="title">Day #1:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #2:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #3:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<a class="button" href="#">BOOK NOW</a>

</div>`

var franceContent = `<div class="packages">
<div class="header france">
    <p class="title">France tour package:</p>
    <p class="subtitle">STARTING FROM $2500 (prices may vary)</p>
</div>


<div class="images">
    <img src="images/tour/tour-france/france-tour-01.jpg" alt="">
    <img src="images/tour/tour-france/france-tour-02.jpg" alt="">
    <img src="images/tour/tour-france/france-tour-03.jpg" alt="">
</div>


<div class="text-section">
    <p class="title">Day #1:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #2:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #3:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<a class="button" href="#">BOOK NOW</a>

</div>`

var egyptContent = `<div class="packages">
<div class="header egypt">
    <p class="title">Egypt tour package:</p>
    <p class="subtitle">STARTING FROM $900 (prices may vary)</p>
</div>


<div class="images">
    <img src="images/tour/tour-egypt/egypt-tour-01.jpg" alt="">
    <img src="images/tour/tour-egypt/egypt-tour-02.jpg" alt="">
    <img src="images/tour/tour-egypt/egypt-tour-03.jpg" alt="">
</div>


<div class="text-section">
    <p class="title">Day #1:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #2:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #3:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<a class="button" href="#">BOOK NOW</a>

</div>`

var japanContent = `<div class="packages">
<div class="header japan">
    <p class="title">Japan tour package:</p>
    <p class="subtitle">STARTING FROM $1300 (prices may vary)</p>
</div>


<div class="images">
    <img src="images/tour/tour-japan/japan-tour-01.jpg" alt="">
    <img src="images/tour/tour-japan/japan-tour-02.jpg" alt="">
    <img src="images/tour/tour-japan/japan-tour-03.jpg" alt="">
</div>


<div class="text-section">
    <p class="title">Day #1:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #2:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #3:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<a class="button" href="#">BOOK NOW</a>

</div>`

var canadaContent = `<div class="packages">
<div class="header canada">
    <p class="title">Canada tour package:</p>
    <p class="subtitle">STARTING FROM $2000 (prices may vary)</p>
</div>


<div class="images">
    <img src="images/tour/tour-canada/canada-tour-01.jpg" alt="">
    <img src="images/tour/tour-canada/canada-tour-02.jpg" alt="">
    <img src="images/tour/tour-canada/canada-tour-03.jpg" alt="">
</div>


<div class="text-section">
    <p class="title">Day #1:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #2:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #3:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<a class="button" href="#">BOOK NOW</a>

</div>`

var uaeContent = `<div class="packages">
<div class="header uae">
    <p class="title">U.A.E tour package:</p>
    <p class="subtitle">STARTING FROM $3000 (prices may vary)</p>
</div>


<div class="images">
    <img src="images/tour/tour-uae/uae-tour-01.jpg" alt="">
    <img src="images/tour/tour-uae/uae-tour-02.jpg" alt="">
    <img src="images/tour/tour-uae/uae-tour-03.jpg" alt="">
</div>


<div class="text-section">
    <p class="title">Day #1:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #2:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="text-section">
    <p class="title">Day #3:</p>
    <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<a class="button" href="#">BOOK NOW</a>

</div>`

export function getPageContent(pageID, callback){
    $("#app").html(eval(pageID));
    if (callback) callback();
};