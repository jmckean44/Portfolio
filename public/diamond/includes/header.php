<?php

$path = $_SERVER['REQUEST_URI'];

$description = "";
$keywords = "";

$id = basename($_SERVER["PHP_SELF"], ".php");
switch ($id) {

  case "index":
    $title = "";
    $description = "";
    $keywords = "";
    break;

  case "location":
    if ($id == "location") {
      $title = "Location - ";
      $description = "";
      $keywords = "";
    }
    break;

  case "plans":
    if ($id == "plans") {
      $title = "Plans - ";
      $description = "";
      $keywords = "";
    }
    break;

  case "features":
    if ($id == "features") {
      $title = "Features - ";
      $description = "";
      $keywords = "";
    }
    break;

  case "news":
    if ($id == "news") {
      $title = "News - ";
      $description = "";
      $keywords = "";
    }
    break;

  case "team":
    if ($id == "team") {
      $title = "Team - ";
      $description = "";
      $keywords = "";
    }
    break;

  case "contact":
    if ($id == "contact") {
      $title = "Contact - ";
      $description = "";
      $keywords = "";
    }
    break;

  case "thankyou":
    if ($id == "thankyou") {
      $title = "Thank You - ";
      $description = $description;
      $keywords = $keywords;
    }
    break;

  case "privacy":
    if ($id == "privacy") {
      $title = "Privacy Policy - ";
      $description = $description;
      $keywords = $keywords;
    }
    break;
}
?>


<!DOCTYPE html>
<html class="no-js" lang="en" dir="ltr">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="theme-color" content="#ef4036">
  <meta name="msapplication-navbutton-color" content="#ef4036">
  <meta name="apple-mobile-web-app-status-bar-style" content="#ef4036">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="The Diamond is a purpose-built 1, 2 and 3 bedroom suite rental community in the Junction neighbourhood, Toronto." />
  <meta name="keywords" content="The Diamond, rental suites, Diamond rental suites, The Junction, The Junction neighbourhood, Toronto, 1, 2 and 3 bedroom suites" />

  <meta property="og:title" content="The Diamond">
  <meta property="og:site_name" content="The Diamond Rental Suites">
  <meta property="og:url" content="https://junctionrentals.ca">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://junctionrentals.ca/img/diamond-rentals.jpg">
  <meta property="og:description" content="The Diamond is a purpose-built 1, 2 and 3 bedroom suite rental community in the Junction neighbourhood, Toronto.">

  <!-- P&B Google Tag Manager -->
  <script>
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-WVLS5897');
  </script>
  <!-- End Google Tag Manager -->

  <!-- SEARCH KINGS Google Tag Manager -->
  <script>
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-TTX39HC6');
  </script>
  <!-- End Google Tag Manager -->

  <!-- P&B GOOGLE ANALYTICS-->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-KKPFZNY429"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-KKPFZNY429');
  </script>

  <!-- SEARCH KINGS Meta Pixel Code -->
  <script>
    ! function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '717622123867743');
    fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=717622123867743&ev=PageView&noscript=1" /></noscript>
  <!-- End Meta Pixel Code -->

  <!-- JSON-LD  -->
  <script type='application/ld+json'>
    {
      "@context": "http://www.schema.org",
      "@type": "LocalBusiness",
      "name": "The Diamond",
      "alternateName": "The Diamond - Rental Living",
      "url": "https://junctionrentals.ca",
      "logo": "https://junctionrentals.ca/img/logo.svg",
      "image": "https://junctionrentals.ca/img/diamond-rentals.jpg",
      "description": "The Diamond is a purpose-built 1, 2 and 3 bedroom suite rental community in the Junction neighbourhood, Toronto",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "Toronto",
        "addressRegion": "Ontario",
        "postalCode": "",
        "addressCountry": "Canada"
      }
    }
  </script>

  <!-- FAVICONS -->
  <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">
  <link rel="manifest" href="/img/site.webmanifest">
  <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#e12629">
  <link rel="shortcut icon" href="/img/favicon.ico">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-config" content="/img/browserconfig.xml">
  <meta name="theme-color" content="#ffffff">

  <!-- CSS -->
  <link rel="stylesheet" type="text/css" href="../assets/styles.css" />

  <title>The Diamond - Rental Living</title>

  <!-- FORCE PAGE RELOAD ON RETURN from THANK YOU -->
  <script>
    (function() {
      window.onpageshow = function(event) {
        if (event.persisted) {
          window.location.reload();
        }
      };
    })();
  </script>

</head>

<body id="<?= basename($_SERVER["PHP_SELF"], ".php") ?>" class="<?php if (isset($addClass)) echo $addClass; ?>" onload="document.body.style.opacity='1'">

  <main>

    <!-- SEARCH KINGS Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TTX39HC6" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WVLS5897" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->