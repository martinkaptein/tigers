---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
# write a good description
description: "Right here"
# meta image relative to this file
metaImage: "banner.jpg" 
#Set to true to have Table of Content
toc: false 
# cat = {tag&category(&keyword)}, so maximum of 3 of those >> See example.com/cat for an example of which categories to use
cat:
  - tiger
---

(note: internal links ALWAYS should end with slash, link to static content directly, like [this](picture.jpg).

## Heading

