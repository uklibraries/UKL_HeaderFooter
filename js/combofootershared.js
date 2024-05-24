// Universal Footer for University of Kentucky Libraries websites
// Author: Eric Weig, University of Kentucky Libraries
// 2022 - 2024

var ukfoot = document.createElement("div");
ukfoot.id = "ukfooter";
ukfoot.innerHTML =
	'<div class="ukl-ext-clamp">    <div class="ukl-slab ukl-slab--wildcat-blue ukl-universal-footer">    <div class="ukl-slab__wrapper">      <a href="https://www.uky.edu">        <span class="ukl-show-for-sr" role="region" aria-label="University Navigation">University of Kentucky homepage</span>        <!-- TWIG INCLUDE : @atoms/uk-wordmark.html.twig" -->        <svg          class="ukl-uk-wordmark"          preserveAspectRatio="xMinYMid"          viewBox="0 0 196 20"          xmlns="http://www.w3.org/2000/svg"        >          <g fill="currentColor" fill-rule="evenodd">            <path              d="M193.116 12.651h-.459V11.8h.575c.071 0 .142.005.215.012.071.01.137.028.193.057a.33.33 0 0 1 .138.125c.037.056.055.13.055.22a.43.43 0 0 1-.06.247.354.354 0 0 1-.16.13.706.706 0 0 1-.231.052 3.82 3.82 0 0 1-.266.01m.883.105c.136-.113.205-.288.205-.526 0-.267-.076-.462-.23-.583-.152-.122-.389-.182-.71-.182h-.976v2.66h.37v-1.142h.476l.728 1.142h.404l-.766-1.173a.923.923 0 0 0 .499-.196"            ></path>            <path              d="M194.943 13.55a2.01 2.01 0 0 1-.419.627 1.919 1.919 0 0 1-1.378.567 1.91 1.91 0 0 1-.758-.15 2.009 2.009 0 0 1-.619-.415 1.907 1.907 0 0 1-.57-1.386c0-.283.051-.545.152-.787a1.9 1.9 0 0 1 .418-.624 1.972 1.972 0 0 1 2.138-.416 1.929 1.929 0 0 1 1.187 1.802c0 .28-.051.54-.151.782m.336-1.686a2.311 2.311 0 0 0-1.239-1.203 2.29 2.29 0 0 0-.893-.177 2.28 2.28 0 0 0-.896.177 2.285 2.285 0 0 0-.737.483 2.315 2.315 0 0 0-.686 1.65c0 .325.062.627.188.903a2.275 2.275 0 0 0 1.235 1.204c.28.118.58.176.896.176.313 0 .611-.058.893-.176.28-.117.528-.279.735-.484a2.254 2.254 0 0 0 .686-1.65c0-.323-.058-.625-.182-.903M14.935 2.113h-4.539v.51l1.811.548v7.38c0 2.177-1.22 3.906-3.46 3.906-2.36 0-3.824-1.058-3.824-3.926V2.988l2.218-.366v-.509H.95v.51l2.017.365v7.97c0 3.01 1.85 4.453 5.148 4.453 3.238 0 5.008-2.196 5.008-4.86v-7.38l1.811-.549v-.509zm8.75 6.347c0-1.854-.957-2.828-2.564-2.828-1.099 0-2.096.569-3.317 1.707l-.184-.04.144-1.525-.184-.162-2.868.733v.345l1.423.65v6.934l-1.445.365v.427h4.457v-.427l-1.363-.365V7.786c.835-.569 1.567-.934 2.38-.934 1.305 0 1.873.813 1.873 2.216v5.206l-1.383.365v.427h4.476v-.427l-1.445-.365V8.459zm4.763-5.228c.774 0 1.303-.65 1.303-1.32 0-.651-.49-1.18-1.183-1.18-.753 0-1.279.65-1.279 1.3 0 .673.488 1.2 1.16 1.2m.955 2.441l-.082-.062-2.99.733v.346l1.425.65v6.933l-1.445.368v.425h4.455v-.425l-1.363-.368zm11.477.284h-3.805v.428l1.407.589-1.121 3.334-1.018 2.624h-.183l-2.36-6.12 1.322-.427v-.428h-4.478v.428l1.263.427 3.561 8.478h.57l3.359-8.274 1.483-.631zm1.731 3.436c.12-1.849 1.117-3.15 2.48-3.15 1.305 0 1.978 1.036 2.059 3.008l-4.539.142zm2.666-3.762c-2.522 0-4.455 2.157-4.455 5.024 0 2.825 1.81 4.738 4.413 4.738 1.325 0 2.464-.63 3.723-1.83l-.162-.428c-1.139.67-1.848.956-2.81.956-2.398 0-3.479-1.565-3.397-4.107h6.431c0-2.258-1.219-4.353-3.743-4.353zm10.115.002c-.955 0-1.75.569-2.624 1.97l-.206-.06.164-1.769-.182-.161-2.871.73v.346l1.426.65v6.935l-1.446.366v.427h4.598v-.427l-1.505-.366V8.336c.488-.854 1.363-1.667 2.035-1.565-.142.67.244 1.342.997 1.342.57 0 1.081-.448 1.081-1.2 0-.753-.591-1.28-1.467-1.28m5.781 3.761c-1.569-.59-2.116-1.018-2.116-1.81 0-.772.711-1.403 1.627-1.403 1.137 0 1.83.59 2.624 2.217l.427-.102-.06-2.257c-.59-.225-1.566-.427-2.626-.427-1.954 0-3.255 1.26-3.255 2.786 0 1.463 1.077 2.092 2.808 2.745 1.71.65 2.278 1.116 2.278 1.91 0 1.1-.71 1.688-1.872 1.688-1.363 0-2.199-.71-2.867-2.582l-.491.04v2.562a7.972 7.972 0 0 0 3.014.55c2.056 0 3.58-1.159 3.58-2.99 0-1.423-.853-2.094-3.07-2.927m7.345-3.721l-.083-.062-2.99.733v.346l1.425.65v6.933l-1.445.368v.425h4.455v-.425l-1.361-.368zm-.957-2.441c.773 0 1.303-.65 1.303-1.32 0-.651-.49-1.18-1.183-1.18-.751 0-1.28.65-1.28 1.3 0 .673.489 1.2 1.16 1.2m7.59 10.819c-.711 0-1.037-.063-1.3-.245-.429-.286-.53-.753-.53-1.484V6.873h3.133V5.857h-3.134V3.233h-.53l-.936 2.42-1.73.793v.427h1.568v6.018c0 1.566.691 2.338 1.994 2.338.957 0 1.933-.385 2.828-.936l-.02-.364a9.493 9.493 0 0 1-1.343.122m7.977-7.666l1.486.59-2.155 6.14h-.104L79.96 6.81l1.221-.426v-.427h-4.378v.427l1.24.426 3.522 8.398-.591 1.342c-.304.67-.67 1.24-1.058 1.607-.427-.57-.771-.936-1.405-.936-.57 0-1.035.427-1.035.976 0 .55.406 1.138 1.363 1.138 1.14 0 1.933-.69 2.746-2.683l3.929-9.639 1.383-.629v-.427H83.13v.427zm11.113 8.396c-1.425 0-2.708-1.24-2.708-4.209 0-3.05 1.161-4.33 2.566-4.33 1.525 0 2.706 1.24 2.706 4.208 0 3.051-1.057 4.331-2.564 4.331m.08-9.149c-2.91 0-4.68 2.276-4.68 4.88 0 2.785 1.587 4.88 4.396 4.88 2.93 0 4.66-2.338 4.66-4.942 0-2.785-1.526-4.818-4.376-4.818M105.375.019c-.915 0-1.79.325-2.544.976-1.037.897-1.547 2.055-1.547 4.048v.974l-1.832.531v.405h1.832v7.32l-1.445.368v.425h4.843v-.425l-1.749-.368v-7.32h2.522V6.08h-2.522V4.228c0-1.99.468-2.905 1.385-3.476.61 1.058 1.057 1.403 1.689 1.403.59 0 .999-.385.999-.996 0-.61-.572-1.14-1.63-1.14m11.884 7.788l4.273-4.453 1.833-.73v-.51h-4.559v.51l1.525.628-4.17 4.758h-1.791V2.99l2.034-.366v-.509h-6.167v.51l2.218.365v11.203l-2.218.366v.509h6.167v-.51l-2.034-.365v-5.39h1.647l4.052 5.307-1.385.49v.467h5.29v-.51l-1.708-.588z"            ></path>            <path              d="M125.604 9.393c.12-1.849 1.118-3.15 2.48-3.15 1.305 0 1.977 1.036 2.057 3.008l-4.537.142zm2.666-3.762c-2.522 0-4.455 2.157-4.455 5.024 0 2.825 1.811 4.738 4.413 4.738 1.325 0 2.464-.63 3.724-1.83l-.162-.428c-1.14.67-1.85.956-2.81.956-2.399 0-3.48-1.565-3.398-4.107h6.432c0-2.258-1.22-4.353-3.744-4.353zm13.839 2.829c0-1.854-.958-2.828-2.564-2.828-1.1 0-2.097.569-3.318 1.707l-.184-.04.144-1.525-.182-.162-2.87.733v.345l1.423.65v6.934l-1.445.365v.427h4.457v-.427l-1.363-.365V7.786c.835-.569 1.567-.934 2.38-.934 1.305 0 1.873.813 1.873 2.216v5.206l-1.383.365v.427h4.477v-.427l-1.445-.365V8.459zm6.614 5.591c-.713 0-1.037-.063-1.303-.245-.426-.286-.53-.753-.53-1.484V6.873h3.136V5.857h-3.136V3.233h-.527l-.937 2.42-1.731.793v.427h1.569v6.018c0 1.566.691 2.338 1.992 2.338.96 0 1.935-.385 2.83-.936l-.022-.364a9.448 9.448 0 0 1-1.341.122m10.867-8.277l-.182-.162-2.911.73v.246l1.444.61v6.037c-.813.55-1.586.917-2.4.917-1.263 0-1.852-.733-1.852-2.298v-6.08l-.184-.162-2.89.73v.246l1.427.61v5.265c0 1.647.851 2.929 2.584 2.929 1.22 0 2.074-.57 3.295-1.71l.186.043-.146 1.505.184.142 2.89-.713v-.365l-1.445-.326V5.774zm7.39 8.419c-1.895 0-3.422-1.383-3.422-3.742 0-2.907 1.71-4.209 3.3-4.209.387 0 .627.06.915.142-.226.246-.368.631-.368 1.078 0 .61.428 1.22 1.16 1.22.633 0 1.1-.529 1.1-1.22 0-1.016-1.039-1.83-2.807-1.83-2.952 0-5.007 2.196-5.007 5.165 0 2.725 1.811 4.594 4.433 4.594 1.343 0 2.586-.589 3.605-1.747l-.205-.263c-1.016.527-1.67.812-2.705.812m8.791-4.475l2.973-2.804 1.363-.53v-.426h-3.785v.365l1.097.711-2.646 2.95h-.955V.141L173.633 0l-3.054.793v.365l1.589.673v12.443l-1.445.366v.425h4.316v-.425l-1.222-.366v-3.6h.955l2.646 3.539-.854.427v.425h3.906v-.425l-1.14-.427zm15.06-3.76h-3.765v.428l1.485.589-2.156 6.14h-.102l-2.4-6.304 1.219-.425v-.428h-4.375v.428l1.241.425 3.518 8.398-.588 1.342c-.304.671-.67 1.24-1.057 1.607-.428-.569-.775-.936-1.405-.936-.57 0-1.04.427-1.04.976 0 .55.41 1.139 1.364 1.139 1.14 0 1.936-.691 2.75-2.684l3.925-9.638 1.386-.63v-.427z"            ></path>          </g>        </svg>        <!-- END TWIG INCLUDE : @atoms/uk-wordmark.html.twig" -->      </a>      <div class="ukl-universal-footer__ribbon" role="region" aria-label="University Navigation">        <div>          <a href="https://www.uky.edu/equal-opportunity-university/" class="underline-link">            An Equal Opportunity University          </a>        </div>        <div>          <a href="https://www.uky.edu/accreditation/" class="underline-link">            Accreditation          </a>        </div>        <div>          <a href="https://directory.uky.edu/" class="underline-link">            Directory          </a>        </div>        <div>          <a href="mailto:ukpr@lsv.uky.edu" class="underline-link">Email</a>        </div>        <div>          <a href="https://www.uky.edu/see/privacy" class="underline-link">            Privacy Policy          </a>        </div>        <div>          <a            href="https://www.uky.edu/see/web-accessibility"            class="underline-link"          >            Accessibility          </a>        </div>      </div>      <div class="ukl-universal-footer__ribbon" role="region" aria-label="University Navigation">        <div>&#169; University of Kentucky</div>        <div>          <a href="https://www.uky.edu/see/directions">            <svg viewBox="0 0 11 15" xmlns="http://www.w3.org/2000/svg">              <path                fill="white"                d="M9.996 5.59c0 2.45-4.384 9.19-4.384 9.19S1.229 8.04 1.229 5.59c0-2.449 1.961-4.435 4.383-4.435 2.421 0 4.384 1.986 4.384 4.436zM5.713 8.34c1.403 0 2.537-1.15 2.537-2.567 0-1.416-1.134-2.567-2.537-2.567-1.4 0-2.537 1.151-2.537 2.567 0 1.417 1.136 2.566 2.537 2.566z"                fill-rule="evenodd"                stroke-linecap="round"                stroke-linejoin="round"              ></path>            </svg>            <span class="label">Lexington, Kentucky 40506</span>          </a>        </div>      </div>    </div>  </div></div><!-- TWIG-END: components/clamp-for-apps/footer.twig -->';
document.body.appendChild(ukfoot);
