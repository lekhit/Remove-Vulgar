<!DOCTYPE html>
<html>
  <head>
    <title>Traversy Media Quick Launcher</title>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
    <style>
      /* Modal Structure */

      html,
      body {
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
        margin: 0;
        min-height: 180px;
        padding: 0;
        width: 384px;
      }

      h1 {
        font-family: "Menlo", monospace;
        font-size: 22px;
        font-weight: 400;
        margin: 0;
        color: #2f5876;
      }

      a:link,
      a:visited {
        color: #000000;
        outline: 0;
        text-decoration: none;
      }

      img {
        width: 30px;
      }

      .modal-header {
        align-items: center;
        border-bottom: 0.5px solid #dadada;
      }

      .modal-content {
        padding: 0 22px;
      }

      .modal-icons {
        border-top: 0.5px solid #dadada;
        height: 50px;
        width: 100%;
      }

      .logo {
        padding: 16px;
      }

      .logo-icon {
        vertical-align: text-bottom;
        margin-right: 12px;
      }

      .version {
        color: #444;
        font-size: 18px;
      }

      .flex-container {
        display: flex;
        justify-content: space-between;
        padding: 10px 22px;
      }

      .flex {
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
        width: 120px;
      }

      .flex:hover {
        opacity: 0.4;
      }

      .flex .fa {
        font-size: 40px;
        color: #2f5876;
      }
    </style>
    <script src="popup.js"></script>
  </head>

  <body>
    <div class="modal-header">
      <h1 class="logo">
        <img class="logo-icon" src="images/traversy-logo.png" />Traversy
        Launcher
        <span class="version">(1.0.0)</span>
      </h1>
    </div>
    <div class="modal-content">
      <p>Easily Access Traversy Media content</p>
    </div>
    <div class="modal-icons">
      <div class="flex-container">
        <div class="flex">
          <a href="https://www.traversymedia.com" target="_blank">
            <i class="fa fa-globe" style="color:darksalmon "></i>
          </a>
        </div>
        <div class="flex">
          <a href="https://www.youtube.com/traversymedia" target="_blank">
            <i class="fa fa-youtube" style="color:darksalmon "></i>
          </a>
        </div>
        <div class="flex">
          <a href="https://www.twitter.com/traversymedia" target="_blank">
            <i class="fa fa-twitter" style="color:darksalmon "></i>
          </a>
        </div>
        <div class="flex">
          <a href="https://www.facebook.com/traversymedia" target="_blank">
            <i class="fa fa-facebook" style="color:darksalmon "></i>
          </a>
        </div>
        <div class="flex">
          <a href="https://www.github.com/bradtraversy" target="_blank">
            <i class="fa fa-github" style="color:darksalmon "></i>
          </a>
        </div>
      </div>
    </div>
  </body>
</html>
