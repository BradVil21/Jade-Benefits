/* ===================================================================
   Jade Benefits  |  Shared footer  (injected into #site-footer)
   Update the social URLs below once your profiles are live.
   =================================================================== */
(function () {
  var SOCIAL = {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    tiktok: "https://www.tiktok.com/"
  };

  var icons = {
    facebook:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>',
    instagram:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>',
    linkedin:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05C12.85 9.1 14.6 8 16.7 8c4.1 0 4.85 2.7 4.85 6.2V24h-4v-8.8c0-2.1-.04-4.8-2.93-4.8-2.93 0-3.38 2.3-3.38 4.65V24h-4V8.5z"/></svg>',
    tiktok:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>'
  };

  function social(name, label) {
    return (
      '<a href="' + SOCIAL[name] + '" target="_blank" rel="noopener" aria-label="' +
      label + '">' + icons[name] + "</a>"
    );
  }

  var html =
    '<footer>' +
    '<div class="container">' +
      '<div class="foot-grid">' +
        '<div>' +
          '<div class="brand"><span class="brand-badge">JB</span><span style="color:#fff">Jade Benefits</span></div>' +
          '<p class="foot-brand-text">Tailored health coverage for small groups, small business owners, self-employed individuals, families, and truckers. Headquartered in Fort Lauderdale, FL, with nationwide carrier networks.</p>' +
          '<div class="socials">' +
            social("facebook", "Facebook") +
            social("instagram", "Instagram") +
            social("linkedin", "LinkedIn") +
            social("tiktok", "TikTok") +
          "</div>" +
        "</div>" +
        '<div>' +
          "<h4>Explore</h4>" +
          '<ul>' +
            '<li><a href="index.html">Home</a></li>' +
            '<li><a href="services.html">Services</a></li>' +
            '<li><a href="about.html">About Us</a></li>' +
            '<li><a href="blog.html">Blog</a></li>' +
            '<li><a href="contact.html">Contact Us</a></li>' +
            '<li><a href="quote.html">Get a Quote</a></li>' +
          "</ul>" +
        "</div>" +
        '<div>' +
          "<h4>Who we serve</h4>" +
          '<ul>' +
            '<li><a href="services.html">Group Coverage</a></li>' +
            '<li><a href="blog-truckers.html">Truckers</a></li>' +
            '<li><a href="services.html">1099 &amp; Self-Employed</a></li>' +
            '<li><a href="services.html">Families &amp; Individuals</a></li>' +
            '<li><a href="services.html">Trade Industries</a></li>' +
            '<li><a href="services.html">Medical Groups</a></li>' +
          "</ul>" +
        "</div>" +
        '<div>' +
          "<h4>Reach us</h4>" +
          '<ul>' +
            '<li><a href="tel:+13529494463">352-949-4463</a></li>' +
            '<li><a href="mailto:Chloe@jadebenefits.com">Chloe@jadebenefits.com</a></li>' +
            "<li>Fort Lauderdale, FL</li>" +
            "<li>Nationwide coverage</li>" +
          "</ul>" +
        "</div>" +
      "</div>" +
      '<div class="foot-bottom">' +
        "<span>&copy; <span id=\"year\">2026</span> Jade Benefits. All rights reserved.</span>" +
        '<span class="foot-legal"><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms &amp; Conditions</a></span>' +
      "</div>" +
    "</div>" +
    "</footer>";

  var mount = document.getElementById("site-footer");
  if (mount) mount.outerHTML = html;
})();
