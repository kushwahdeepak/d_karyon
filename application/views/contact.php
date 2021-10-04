<div id="content" role="main">
  <section class="section swatch-white-red section-nopadding">
    <div class="container-fullwidth">
      <div class="row">
        <div class="col-md-12">
          <div class="google-map" id="map"></div>
        </div>
      </div>
    </div>
  </section>
  <section class="section swatch-white-red has-top">
    <div class="decor-top">
      <svg class="decor" height="100%" preserveaspectratio="none" version="1.1" viewbox="0 0 100 100" width="100%"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M0 100 L50 0 L100 100" stroke-width="0"></path>
      </svg>
    </div>
    <div class="container">
      <header class="section-header underline">
        <h1 class="headline hyper hairline">Want to talk?</h1>
        <p class="big">Address: 1234 Some Street, Fancytown, UK Contact details: Phone: 123 456 7890, Fax: +49 123 456 7891.</p>
      </header>
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <form id="contactForm" class="contact-form">
            <div class="form-group form-icon-group">
              <input class="form-control" id="name" name="name" placeholder="Your name *" type="text" required>
              <i class="fa fa-user"></i>
            </div>
            <div class="form-group form-icon-group">
              <input class="form-control" id="email" name="email" placeholder="Your email *" type="email" required>
              <i class="fa fa-envelope"></i>
            </div>
            <div class="form-group form-icon-group">
              <textarea class="form-control" id="message" name="message" placeholder="Your message" rows="10" required></textarea>
              <i class="fa fa-pencil"></i>
            </div>
            <div class="form-group text-center">
              <button class="btn btn-primary btn-icon btn-icon-right" type="submit">Send email
                <div class="hex-alt">
                  <i class="fa fa-envelope"></i>
                </div>
              </button>
            </div>
          </form>
          <div id="messages"></div>
        </div>
      </div>
    </div>
  </section>