---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

## Recipes organised per tag
{% for tag in site.tags %}
### {{tag[0]}}
  {% for post in tag[1] %}
  * [{{post.title}}]({{post.url}})
  {% endfor %}

{% endfor %} 