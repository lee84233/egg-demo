<html>
  <head>
    <title>user</title>
    <!-- <link rel="stylesheet" href="/public/css/news.css" /> -->
  </head>
  <body>
    <div class="news-view view">
      {% for item in user %}
        <div class="item">
          <a href="">{{ item.timevalue }}</a>
        </div>
      {% endfor %}
    </div>
    <h1>{{test}}</h1>
    <pre>{{user[0].username}}</pre>
  </body>
</html>
