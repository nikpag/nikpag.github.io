---
layout: about
title: about
permalink: /
subtitle: ECE Student @NTUA | Research Intern @Brown

profile:
  align: right
  image: profile.jpg
  image_circular: false # crops the image to make it circular
  address: >
# <p>555 your office number</p>
# <p>123 your address street</p>
# <p>Your City, State 12345</p>

news: false  # includes a list of news items
latest_posts: false  # includes a list of the newest posts
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true  # includes social icons at the bottom of the page
---

Hi! I am Nikos, a **senior undergraduate student** of [Electrical and Computer Engineering](https://www.ece.ntua.gr/en/) at the [National Technical University of Athens (NTUA)](https://www.ntua.gr/en/).

Currently, I am a **research intern** at the [Computer Science Department](https://cs.brown.edu/) of [Brown University](https://www.brown.edu/). Here, I am working on [PaSh](https://binpa.sh/), a [Linux Foundation](https://www.linuxfoundation.org/) Project, under the supervision of Prof. [Nikos Vasilakis](https://nikos.vasilak.is/).

My passion for parallel and distributed computer systems, serverless computing, and the Unix shell is clearly expressed in my current research regarding the **serverless parallelization of shell scripts**. In general, I am a strong advocate of the shell and the power it possesses, so I firmly believe it deserves to be treated accordingly.

My **free time** is mostly devoted to music. I love singing and playing guitar, both on and off the stage, and am always open to discovering new genres. I frequently attend concerts or festivals, and get especially captivated by live performances that convey the perfect mixture of proficiency and humanity. Occasionally, I like to test the patience of fellow concert-goers by <a id="hoverText" href="https://en.wiktionary.org/wiki/air-drumming">air-drumming.</a>

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
