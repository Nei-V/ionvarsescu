---
templateKey: blog-post
title: Using Netlify Redirect (301) and Rewrite (200)
date: 2019-01-19T15:04:10.000Z
description: This guide will help you set simple redirects and rewrites in Netlify in a few simple scenarios.
tags:
  - Netlify
  - github
  - repository
  - redirect 301
  - rewrite 200

---


I've spent a lot of hours these days trying to do something I thought was trivial. Hopefully it will save you some time.

As you probably know, <a href="https://www.netlify.com/" target="_blank">Netlify</a>
 is great. It continuously deploys your Github repository to a default subdomain (for example https://ionvarsescu.netlify.com) or to a custom domain (for example <a href="https://www.ionvarsescu.tk" target="_blank">https://www.ionvarsescu.tk)</a>. In order to avoid SEO issues of duplicate content (because both sites will be live), you can do a redirect (301) from the subdomain to the domain. There are probably more ways to do it, I'll show you the simplest one I found.

But you know what's even better? Netlify can deploy a site for each repository you want. Therefore, I was happy to use them for another repository I have (https://portofolio-ion-varsescu.netlify.com). But now I have 2 different websites! While it's very simple to have both your sites on the same domain, at first I didn't find a way to do it by myself, and Google and Stack Overflow didn't help either. In the end, I found two different solutions for the problem - one that I found on the net while the second one was offered by Netlify support (which is excellent!) .

What you'll find in this article:
 1. [How to do a 301 redirect](#1-how-to-do-a-301-redirect).
 2. [How to combine to Github repositories in a singe site - solution 1 - using domain settings](#2-how-to-combine-2-github-repositories-in-a-singe-site-solution-1-using-domain-settings).
 3. [How to combine 2 Github repositories in a singe site - solution 2 - using rewrite](#3-how-to-combine-2-github-repositories-in-a-singe-site-solution-2-Using-Rewrite).

Please read every instruction (every step) carefully until its end before trying it to know what to expect. 

# 1. How to Do a 301 Redirect.
What we want is to redirect visitors that type this address  https://ionvarsescu.netlify.com to this address: https://www.ionvarsescu.tk
(don't forget to change "ionvarsescu" with the name of your choice).
(Of course, you do this after you've already deployed your Netlify site and linked it to your custom domain).

1. Open the file netlify.toml of your site (https://www.ionvarsescu.tk) or add this file to the root of your repository if it doesn't exist.

![netlify.toml in the root](/img/folder-structure-for-toml-file.PNG "Put netlify.toml at the root of you main site repo")

2. Type this:
<code><br>
[build]<br>
  publish = "public"<br>
  command = "npm run build"<br>
[build.environment]<br>
  YARN_VERSION = "1.9.4"<br>
  YARN_FLAGS = "--no-ignore-optional"
</code><br>
<code>
[[redirects]]<br>
</code>
<code>
  from = "https://ionvarsescu.netlify.com/*"<br>
  to = "https://www.ionvarsescu.tk/:splat"<br>
  status = 301<br>
  force = true
</code>


Save and push your changes to Github. Netlify will take it from there.



# 2. How to Combine 2 Github Repositories in a Singe Site - Solution 1 - Using Domain Settings.

We want to combine our two repositories in a single site. One way to do this it to put the second repository in a subdomain of the first one.
In my case, my main site is https://www.ionvarsescu.tk and my second repository will be at this address: https://portofolio-ion-varsescu.ionvarsescu.tk

1. Go to your Neltlify account, and press on your second site that you want to be shown at the subdomain. 

2. Press "Site settings" button.

3. Press "Change site name"

4. Chose a name (in my case, I chose "portofolio-ion-varsescu")

5. Press Back (go back one window to the site's main Neltify page and press this time on the "Domain settings" button.

6. Press "Add custom domain" button

7. Enter the subdomain you want:
https://portofolio-ion-varsescu.ionvarsescu.tk

8. Press "Force HTTPS" button (who doesn't want free HTTPS?). Press "Force HTTPS" once again in the pup-up.

9. Do the 301 redirect as shown above - place this code in the secondary project (the one we've just modified) in the netlify.toml file.
Don't add the [build] and [build.environment] if the secondary site is not using npm (for example I only had an index.html file, a css file and a js file, so this is all the code
I had to write in the netlify.toml file)

<code>
[[redirects]]
  from = "https://portofolio-ion-varsescu.netlify.com/*"<br>
  to = "https://portofolio.ionvarsescu.tk/:splat"<br>
  status = 301<br>
  force = true
</code>

# 3. How to Combine 2 Github Repositories in a Singe site - Solution 2 - Using Rewrite.

While browsing Netlify documentation, I found another solution. With help from Netlify support, I managed to implement it as well. The end result will be different, because you're secondary site's address will look different:
https://www.ionvarsescu.tk/portofolio/  (pay attention to the "/" at the end of the address).
Here, "portofolio" can be anything you want, it will still point behind the scenes at "https://portofolio-ion-varsescu.netlify.com".
For this we'll use the Netlify code 200 for rewrite.

1. Open the file netlify.toml of your site (https://www.ionvarsescu.tk) or add this file to the root of your repository if it doesn't exist (same as when doing a 301 redirect).

2. Type this:
<code><br>
[build]<br>
publish = "public"<br>
command = "npm run build"<br>
[build.environment]<br>
YARN_VERSION = "1.9.4"<br>
YARN_FLAGS = "--no-ignore-optional"
</code><br>
<code>
[[redirects]]<br>
</code>
<code>
from = "/portofolio/*"<br>
to = "https://portofolio-ion-varsescu.netlify.com/:splat"<br>
status = 200<br>
force = true<br>
</code>

Here we use status "200" - rewrite - not "310". One thing that isn't intuitive at first is that the "from" should be where you want your secondary site to be. The visitor is taken behind the scenes FROM the https://www.ionvarsescu.tk/portofolio/ TO the original site https://portofolio-ion-varsescu.netlify.com.

3. Save and push to Github.


I'm not sure yet what's the difference between the two methods, I'll try to find out.
UPDATE - It's still not clear to me what is the technical difference between the two options, but the support staff at Netlify assured me that the impact on SEO is very small, so you can chose either.
Most search engine should know that it's the same site.
There are some articles on the net comparing the two choices with most stating that you should mostly use subdomains instead of folder paths when there isn't a direct relation between the main site
and the secondary one (for example two lines of business).

Again, thanks to the Neltify support team for the help.