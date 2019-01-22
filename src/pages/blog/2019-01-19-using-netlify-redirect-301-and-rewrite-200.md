---
templateKey: blog-post
title: Using Netlify Redirect (301) and Rewrite (200)
date: 2018-04-13T15:04:10.000Z
description: This guide will help you set simple redirects and rewrites in Netlify in a few simple scenarios.
tags:
  - Netlify
  - github
  - repository
  - redirect 301
  - rewrite 200

---


I've spent a lot of hours these days trying to do something I thought was trivial. Hopefully it will save you some time.

As you probably know, Netlify is great. It continuously deploys your Github repository to a default subdomain (for example https://ionvarsescu.netlify.com/) or to a custom domain (for example https://www.ionvarsescu.tk). In order to avoid SEO issues of duplicate content (because both sites will be live), you can do a redirect (301) from the subdomain to the domain. There are probably more ways to do it, I'll show you the simplest one I found.

But you know what's even better? Netlify can deploy a site for each repository you want. Therefore, I was happy to use them for another repository I have (https://portofolio-ion-varsescu.netlify.com/). But know I have 2 different websites! While it's very simple to have both your sites on the same domain, I didn't find manage to do it by myself, and Google and Stack Overflow didn't help either. In the end, I found two different solutions for the problem - one that I found on the net while the second one was offered by Netlify support (which is excellent!) .

What you'll find in this article:
 1. How to do a 301 redirect.
 2. How to combine to Github repositories in a singe site - solution 1 - using domain settings.
 3. How to combine to Github repositories in a singe site - solution 2 - using rewrite.

Please read every instruction (every step) carefully until its end before trying it to know what to expect. 

# 1. How to Do a 301 Redirect.
What we want is to redirect visitors that type this address  https://ionvarsescu.netlify.com/ to this address: https://www.ionvarsescu.tk
(don't forget to change "ionvarsescu" with the name of your choice).
(Of course, you do this after you've already deployed your Netlify site and linked it to your custom domain).

1. Open the file netlify.toml of your site (https://www.ionvarsescu.tk) or add this file to the root of your repository if it doesn't exist.

![netlify.toml in the root](/img/folder-structure-for-toml-file.PNG "Put netlify.toml at the root of you main site repo")

2. Type this:
```
[build]
  publish = "public"
  command = "npm run build"
[build.environment]
  YARN_VERSION = "1.9.4"
  YARN_FLAGS = "--no-ignore-optional"

[[redirects]]
  from = "https://ionvarsescu.netlify.com/*"
  to = "https://www.ionvarsescu.tk/:splat"
  status = 301
  force = true
```

Save and push your changes to Github. Netlify will take it from there.



Congratulations, you have your first files in your repository.

You can find these instructions in my GitHub here:
https://github.com/Nei-V/instructions-vs-code-github.git