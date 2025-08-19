import { E as A, F as M, G as _, H as d, I as x, J as N, K as U, L as H, M as W, N as G, Na as $, O as Z, P as q, Q as v, T as j, V as J, Y as Q, c as D, d as T, f as c, h as O, i as S, j as F, k as L, m as C, oa as K, p as V, q as z, ta as X, xa as Y } from "./chunk-ENKLHCNG.mjs";
import "./chunk-HZL4YIMB.mjs";
import { b as y, c as e } from "./chunk-A3IIQ6X3.mjs";

var ce = "default" in _ ? A : _, f = {}, ee = ce;
f.createRoot = ee.createRoot;
f.hydrateRoot = ee.hydrateRoot;
var te = f.createRoot, b = f.hydrateRoot;

var m = {
  augiA20Il: { elements: {}, page: d(() => import("./k6fpj3n1QpvAJrbizzLbyIp0jt8BZjhUj8EW2ppKnb8.GZERTYCC.mjs")), path: "/" },
  L55yTZkrn: { elements: {}, page: d(() => import("./aDNO04UeWyn7sF6q_XW4LJZHSoMBIj44KhtIh_eiwFU.EEM6IXCQ.mjs")), path: "/about-us" },
  howAnR9Z3: { elements: {}, page: d(() => import("./U02FH-37fpBP_0U3Msa6KdLi3Z4toUgDz4xziKfZYa4.NWWLYC7Z.mjs")), path: "/portfolio" },
  Aok_VFa6C: { elements: {}, page: d(() => import("./a9PUNNJ9nK5BmvTj7MrApUcyRKYGLqUuFv1nyOIc5dA.EBXTWUHK.mjs")), path: "/quote" }
},
E = [{ code: "en-US", id: "default", name: "English", slug: "" }],
I = {},
re = "dcca99469510abe17521871d3ce7c9f6e975dd2a66a5e44d66913247356ccb40";

async function le({ routeId: o, pathVariables: l, localeId: u }) {
  let t = m[o].page.preload(),
    n = c(X, {
      isWebsite: !0,
      routeId: o,
      pathVariables: l,
      routes: m,
      collectionUtils: I,
      framerSiteId: re,
      notFoundPage: d(() => import("./SitesNotFoundPage.js@1.4-QBWK2EIR.mjs")),
      isReducedMotion: void 0,
      localeId: u,
      locales: E,
      preserveQueryParams: void 0,
      siteCanonicalURL: "https://rqtcmuscat.framer.website"
      // EditorBar removed
    }),
    s = c(Q, {
      children: n,
      value: {
        editorBarDisableFrameAncestorsSecurity: !1,
        motionDivToDiv: !1,
        motionDivToDivBackgroundImage: !0,
        pauseOffscreen: !0,
        replaceNestedLinks: !0,
        synchronousNavigationOnDesktop: !1,
        yieldOnTap: !1
      }
    }),
    r = c(K, { children: s }),
    p = c(H, { children: r, value: { routes: {} } });

  return await t, p;
}

var k = typeof document < "u";
if (k) {
  e.__framer_importFromPackage = (l, u) => () =>
    c(j, { error: 'Package component not supported: "' + u + '" in "' + l + '"' });
  e.process = { ...e.process, env: { ...(e.process ? e.process.env : void 0), NODE_ENV: "production" } };
  e.__framer_events = e.__framer_events || [];
  J();
  let o = document.getElementById("main");
  "framerHydrateV2" in o.dataset ? ae(!0, o) : ae(!1, o);
}

function ue() {
  k && e.__framer_events.push(arguments);
}

async function ae(o, l) {
  function u(t, n, s = !0) {
    if (t.caught || e.__framer_hadFatalError) return;
    let r = n?.componentStack;
    if (s) {
      if (
        (console.warn(
          `Recoverable error has happened. Please check any custom code or code overrides to fix server/client mismatches:\n`,
          t,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Fatal crash has happened. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/:\n`,
        t,
        r
      );
    ue(
      s ? "published_site_load_recoverable_error" : "published_site_load_error",
      {
        message: String(t),
        componentStack: r,
        stack: r ? void 0 : t instanceof Error && typeof t.stack == "string" ? t.stack : null
      }
    );
  }

  try {
    let t, n, s, r;
    if (o) {
      let a = JSON.parse(l.dataset.framerHydrateV2);
      (t = a.routeId), (n = a.localeId), (s = a.pathVariables), (r = a.breakpoints), (t = v(m, t));
    } else {
      v(m, void 0);
      let a = q(m, decodeURIComponent(location.pathname), !0, E);
      (t = a.routeId), (n = a.localeId), (s = a.pathVariables);
    }
    let p = le({ routeId: t, localeId: n, pathVariables: s });
    typeof e < "u" &&
      (async () => {
        let a = m[t],
          g = "default",
          R = E.find(({ id: i }) => (n ? i === n : i === g)).code,
          w = null;
        if (a?.collectionId && I) {
          let i = await I[a.collectionId]?.(),
            [P] = Object.values(s);
          i && typeof P == "string" && (w = (await i.getRecordIdBySlug(P, R || void 0)) ?? null);
        }
        let B = Intl.DateTimeFormat().resolvedOptions(),
          oe = B.timeZone,
          ne = B.locale;
        await new Promise((i) => {
          document.prerendering
            ? document.addEventListener("prerenderingchange", i, { once: !0 })
            : i();
        }),
          e.__framer_events.push([
            "published_site_pageview",
            {
              framerSiteId: re ?? null,
              routePath: a?.path || "/",
              collectionItemId: w,
              framerLocale: R || null,
              webPageId: a?.abTestingVariantId ?? t,
              abTestId: a?.abTestId,
              referrer: document.referrer || null,
              url: e.location.href,
              hostname: e.location.hostname || null,
              pathname: e.location.pathname || null,
              hash: e.location.hash || null,
              search: e.location.search || null,
              timezone: oe,
              locale: ne
            },
            "eager"
          ]),
          await U({
            priority: "background",
            ensureContinueBeforeUnload: !0,
            continueAfter: "paint"
          }),
          document.dispatchEvent(
            new CustomEvent("framer:pageview", { detail: { framerLocale: R || null } })
          );
      })();
    let h = await p;
    o
      ? ($("framer-rewrite-breakpoints", () => {
          Y(r), e.__framer_onRewriteBreakpoints?.(r);
        }),
        F(() => {
          Z(), G(), b(l, h, { onRecoverableError: u });
        }))
      : te(l, { onRecoverableError: u }).render(h);
  } catch (t) {
    throw (u(t, void 0, !1), t);
  }
}

export { le as getPageRoot };

// ... keep all your existing imports the same

async function le({ routeId: o, pathVariables: l, localeId: u }) {
  let t = m[o].page.preload(),
    n = c(X, {
      isWebsite: !0,
      routeId: o,
      pathVariables: l,
      routes: m,
      collectionUtils: I,
      framerSiteId: re,
      notFoundPage: d(() => import("./SitesNotFoundPage.js@1.4-QBWK2EIR.mjs")),
      isReducedMotion: void 0,
      localeId: u,
      locales: E,
      preserveQueryParams: void 0,
      siteCanonicalURL: "https://rqtcmuscat.framer.website"
      // ⛔ EditorBar removed
    }),
    s = c(Q, {
      children: n,
      value: {
        editorBarDisableFrameAncestorsSecurity: !1,
        motionDivToDiv: !1,
        motionDivToDivBackgroundImage: !0,
        pauseOffscreen: !0,
        replaceNestedLinks: !0,
        synchronousNavigationOnDesktop: !1,
        yieldOnTap: !1
      }
    }),
    r = c(K, { children: s }),
    p = c(H, { children: r, value: { routes: {} } });

  return await t, p;
}

var k = typeof document < "u";
if (k) {
  e.__framer_importFromPackage = (l, u) => () =>
    c(j, { error: 'Package component not supported: "' + u + '" in "' + l + '"' });
  e.process = { ...e.process, env: { ...(e.process ? e.process.env : void 0), NODE_ENV: "production" } };
  e.__framer_events = e.__framer_events || [];
  J();

  let o = document.getElementById("main");
  "framerHydrateV2" in o.dataset ? ae(!0, o) : ae(!1, o);

  // 🚫 Remove "Made in Framer" badge if injected
  const framerBadge = document.querySelector("[data-framer-badge]");
  if (framerBadge) framerBadge.remove();
}
