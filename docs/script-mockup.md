# Usage
This is a mostly complete version of the script. The only thing needed to change to make this work for a specific site is knowledge of which config you require (e.g., "atlas", "exploreuk", "nkaa"). You change the `data-base_path` to that name and the script will take care of the rest, including fallback behavior.

```html
<script
    id="ukl-header-script"
    type="module"
    src="./js/universalheader.js"
    data-base_path="[YOUR CONFIG NAME HERE]"
    onerror="
    (() => {
        this_script = document.querySelector('#ukl-header-script');
        
        // Use the fallback css
        const styles = document.querySelector('#ukl-header-styles');
        styles.href='https://cdn.jsdelivr.net/gh/uklibraries/UKL_HeaderFooter@dev/css/global_header_footer.css'
        
        // Create a new script and use fallback js
        const script = document.createElement('script');
        script.id = 'ukl-header-script';
        script.type = 'module';
        script.src = 'https://cdn.jsdelivr.net/gh/uklibraries/UKL_HeaderFooter@dev/js/universalheader.js';
        script.dataset.base_path = this_script.dataset.base_path;
        document.head.appendChild(script);
        
        // Remove footer script and footer
        const old_footer=document.querySelector('#ukl-footer');
        if (old_footer) old_footer.remove();
        const old_footer_script=document.querySelector('#ukl-footer-script');
        if (old_footer_script) old_footer_script.remove();
        
        // Create a new footer script and use fallback js
        const footer_script = document.createElement('script');
        footer_script.src='https://cdn.jsdelivr.net/gh/uklibraries/UKL_HeaderFooter@dev/js/combofootershared.js';
        document.body.appendChild(footer_script);

        if (this_script) this_script.remove();
    })();
    "
></script>
```