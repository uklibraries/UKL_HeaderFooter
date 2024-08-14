# Scenario

A winter storm has occurred and campus has gone on Plan B. Only essential staff report to work. This requires activation of the Universal Headers/Footer emergency messaging which is at https://github.com/uklibraries/UKL_HeaderFooter/blob/main/js/config/global/globalConfig.js

![article_header](https://github.com/user-attachments/assets/9b9f51f8-e482-4038-b7d0-303ea2622d28)
Figure 1: Universal Headers/Footer Layers

## Workflow Steps Using GitHub Web UI:

- Make desired change (via official campus communication) to /js/config/global/globalConfig.js
- Download main branch codebase via .zip file
- Unpack .zip file on desktop
- Move globalConfig.js onto network share \\libwebsrv01\WebParts\ukhdr\prod\js\config\global\ (replacing current file there)

The most important aspect of this workflow is to maintain that the source of truth is the GitHub repository, that changes are made there and then transferred to the production site.

## For editing and testing locally:

- Clone the repository locally
  - git clone https://github.com/uklibraries/UKL_HeaderFooter.git
- Make any necessary changes on the main branch
  - Ensure correctness by opening the mockup.html file
- Push the changes to the repository
  - git push origin main
- Download main branch codebase via .zip file
- Unpack .zip file on desktop
- Move globalConfig.js onto network share \\libwebsrv01\WebParts\ukhdr\prod\js\config\global\ (replacing current file there)
