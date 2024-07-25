# UKL_HeaderFooter
> A configurable header and footer for use across University of Kentucky Libraries web properties

# Usage
_More details about how to structure the HTML for your website as well as more detailed explanations can be found [here](https://lib.uky.edu/webparts/ukhdr/2024/dev/doc.html)._

## Implementation Overview
The current implementation works by taking in a number of configuration files found in `/js/config/[...]` and passing them as objects to the universalheader.js file. For customization, it's recommended to use CSS prefixes to avoid naming conflicts on host websites. There is also a system for fallback versions of the script, configurations for which can be found on branch `cdn-fallback`. Inline JavaScript is included for fallback behavior.

## CDN Usage
The [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) we've chosen is [jsDelivr](https://www.jsdelivr.com/), an open source CDN with backing from [Fastly](https://www.fastly.com/) and [CloudFlare](https://www.cloudflare.com/). We've chosen jsDelivr as a cost-saving measure, but its integrations with GitHub are also useful for our team. One additional note about usage, browser caching from jsDelivr is set to be a week from user usage. This was the primary reason the CDN was chosen as a fallback and not the primary provider. In case of changes to the backup, vendors **must** purge relevant links from the [Purge Cache Tool](https://www.jsdelivr.com/tools/purge) if they wish changes to be reflected within 12 hours. A hard refresh from users is also required.

## Production Script Locations
(https://lib.uky.edu/webparts/ukhdr/2024/css/global_header_footer.css)
(https://lib.uky.edu/webparts/ukhdr/2024/js/universalheader.js)
(https://lib.uky.edu/webparts/ukhdr/2024/js/combofootershared.js)

## Fallback CDN Links
> _TODO: Finalize configurations for both production and fallbacks_

## Special Server Settings
lib.uky.edu is currently administered _(current as of 07/25/24)_ by Jay Baker.
Jay has set the http response headers for the ukhdr directory and subdirectories so that they have an immediate expiration to avoid browser caching.

# Questions?
Please contact any of those listed on attributions below.

# Attribution
Code co-authored by [Eric Weig](@libmanuk) and [Neal Powers](@nealium104) with contributions by [MLE Slone](@cokernel).
