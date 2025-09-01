import Script from 'next/script'

export default function ThirdPartyScript() {
    return (
        <>
            <Script id="chat-script-9">
                {`
                    if (window.LiveChatWidget) {
                        window.LiveChatWidget.call('maximize');
                    }
                `}
            </Script>
            <Script id="chat-script">
                {`
                    window.__lc = window.__lc || {};
                    window.__lc.license = 17215314;
                
                    (function (n, t, c) {
                    function i(n) {
                        return e._h ? e._h.apply(null, n) : e._q.push(n);
                    }
                    var e = {
                        _q: [],
                        _h: null,
                        _v: '2.0',
                        on: function () {
                        i(['on', c.call(arguments)]);
                        },
                        once: function () {
                        i(['once', c.call(arguments)]);
                        },
                        off: function () {
                        i(['off', c.call(arguments)]);
                        },
                        get: function () {
                        if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
                        return i(['get', c.call(arguments)]);
                        },
                        call: function () {
                        i(['call', c.call(arguments)]);
                        },
                        init: function () {
                        var n = t.createElement('script');
                        n.async = !0;
                        n.type = 'text/javascript';
                        n.src = 'https://cdn.livechatinc.com/tracking.js';
                        t.head.appendChild(n);
                        },
                    };
                
                    !n.__lc.asyncInit && e.init();
                    n.LiveChatWidget = n.LiveChatWidget || e;
                    })(window, document, [].slice);
                `}
            </Script>
            <Script id="chat-script-1">
                {`
                    (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-WQT66SHZ');
                `}
            </Script>
            <Script id="chat-script-2" src="https://www.googletagmanager.com/gtag/js?id=G-66Q1HF396Z"></Script>
            <Script id="chat-script-3">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-66Q1HF396Z');
                `}
            </Script>
            <noscript>
                <a href="https://www.livechat.com/chat-with/17215314/" rel="nofollow">
                    Chat with us
                </a>
                , powered by{' '}
                <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">
                    LiveChat
                </a>
            </noscript>
        </>
    )
}
