---
layout: about
title: about
permalink: /
subtitle: CS PhD Student @ Columbia University

profile:
  align: right
  image: profile.jpg
  image_circular: false # crops the image to make it circular
  address: >
# <p>555 your office number</p>
# <p>123 your address street</p>
# <p>Your City, State 12345</p>

news: true  # includes a list of news items
latest_posts: false  # includes a list of the newest posts
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true  # includes social icons at the bottom of the page
---

Hi! I am Nikos, an incoming PhD student in [Computer Science](https://www.cs.columbia.edu/) at [Columbia University](https://www.columbia.edu/), advised by Prof. [Kostis Kaffes](https://www.cs.columbia.edu/~kkaffes/). I am also a member of the [ATLAS](https://atlas.cs.brown.edu/) research group at [Brown CS](https://cs.brown.edu/), where I work on [PaSh](https://binpa.sh/)—a [Linux Foundation](https://www.linuxfoundation.org/) project—advised by Prof. [Nikos Vasilakis](https://nikos.vasilak.is/). I hold a Master's degree in [Electrical and Computer Engineering](https://www.ece.ntua.gr/en/) from [NTUA](https://www.ntua.gr/en/).

My research interests are in distributed systems and cloud computing. Right now, I am working on accelerating shell programs by automatically scaling them out to serverless infrastructure, and providing fault tolerance for distributed shell execution.

In my free time, I hunt down concerts that convey a mix of proficiency and humanity, and test the patience of fellow concert-goers by air-drumming.

<!-- Prefetch air-drumming image for immediate change -->
<img src="/assets/img/air-drumming.gif" style="display: none;" />

<!-- Change profile picture to air-drumming on hover -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
      const profilePicture = document.getElementsByTagName("img")[0];

      const originalSrc = profilePicture.src
      const drummingSrc = "/assets/img/air-drumming.gif"

      profilePicture.addEventListener("mouseover", function() {
        profilePicture.src = drummingSrc;
      })
      profilePicture.addEventListener("mouseout", function() {
        profilePicture.src = originalSrc;
      })
    })
</script>
