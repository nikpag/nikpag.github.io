---
layout: about
title: about
permalink: /
subtitle: ECE Student @NTUA | Visiting Research Intern @BrownCS

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

Hi! I am Nikos, a **senior undergraduate student** of [Electrical and Computer Engineering](https://www.ece.ntua.gr/en/) at [NTUA](https://www.ntua.gr/en/). Currently, I am a **visiting research intern** at [BrownCS](https://cs.brown.edu/), and a member of the [ATLAS](https://atlas.cs.brown.edu/) research group. Here, I work on [PaSh](https://binpa.sh/), a [Linux Foundation](https://www.linuxfoundation.org/) Project, under the supervision of Prof. [Nikos Vasilakis](https://nikos.vasilak.is/).

My **research interests** fall broadly into distributed systems and cloud computing. Right now, I am working on:

- Improving the performance of shell programs by automatically scaling them out to serverless infrastructure
- Providing fault tolerance for distributed shell execution

My **free time** is mostly devoted to music. I love singing, playing guitar, discovering new genres, and attending concerts that convey a mix of proficiency and humanity. Occasionally, I like to test the patience of fellow concert-goers by <a id="hoverText" href="https://en.wiktionary.org/wiki/air-drumming">air-drumming.</a>

<!-- Prefetch air-drumming image for immediate change -->
<img src="/assets/img/air-drumming.gif" style="display: none;" />

<!-- Change profile picture to air-drumming on hover -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
      const hoverText = document.getElementById("hoverText")
      const profilePicture = document.getElementsByTagName("img")[0]

      const originalSrc = profilePicture.src
      const drummingSrc = "/assets/img/air-drumming.gif"

      hoverText.addEventListener("mouseover", function() {
        profilePicture.src = drummingSrc;
      })
      hoverText.addEventListener("mouseout", function() {
        profilePicture.src = originalSrc;
      })
    })
</script>
