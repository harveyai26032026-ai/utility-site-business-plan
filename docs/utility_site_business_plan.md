# Utility-Site Portfolio — Business Plan
*Adapted to use **Hermes Agent** for site creation and low-cost domain/hosting solutions*

---

## 1. Executive Summary

| Item | Detail |
|------|--------|
| **Core concept** | Build a portfolio of **single-purpose utility web apps** (word unscrambler, phone-number generator, name generator, calculators, etc.) that solve a specific problem instantly. |
| **Production engine** | Use **Hermes Agent** to generate the HTML / CSS / JS, create a GitHub repo, and push the site automatically. No manual coding beyond prompting Hermes. |
| **Domain/hosting** | Register inexpensive `.com` (or `.xyz/.online`) domains (~$10/yr) and deploy the static site to a **free-tier static host** — Netlify, Vercel, or Cloudflare Pages. |
| **Monetisation** | **Google AdSense** (display ads). Typical RPM for high-engagement utility sites in Tier-1 countries = **$3–$12** (avg ~$9). |
| **Scalability** | One prompt → site → domain → deployment. Repeat for 5–10 utilities per month. Publish each as a remixable template for referral commissions. |
| **Competitive edge** | Zero-code AI-first production (~15 min/site); low overhead (cheap domains + free hosting); systematic SEO workflow; portfolio compounding effect. |
| **Target audience** | Aspiring digital-asset owners seeking passive income; small-business owners needing a quick tool; budget-conscious builders willing to run Hermes locally. |

---

## 2. Business Model Canvas

| Block | How it works with Hermes |
|------|--------------------------|
| **Value proposition** | "Turn a keyword idea into a live, ad-monetised utility site in < 30 min — no code, no servers." |
| **Customer segments** | Solo entrepreneurs; hobbyist web-tool builders; SEO-savvy marketers seeking evergreen assets. |
| **Channels** | Hermes Agent (CLI) for creation; GitHub for source control; domain registrar (Namecheap/Porkbun/Dynadot); static host (Netlify/Vercel/Cloudflare Pages); AdSense for revenue; template marketplaces for referrals. |
| **Customer relationships** | Fully self-serve — Hermes prompts guide every step. Optional Discord/Telegram community for sharing keyword ideas and templates. |
| **Revenue streams** | 1. AdSense CPM (impressions). 2. Referral commissions from template remixes (up to $150 per host signup). 3. Premium add-ons (custom branding API) — later stage. |
| **Key resources** | Hermes Agent (local); domain registrar account; free static-hosting accounts; Google AdSense account; keyword-research tool (Google Keyword Planner / Ubersuggest / Ahrefs). |
| **Key activities** | Keyword discovery & SERP-gap validation → prompt Hermes → create GitHub repo → register domain → connect host → deploy → insert AdSense → SEO optimise → publish template. |
| **Key partners** | Domain registrars; static-host providers; Google (AdSense, Search Console). |
| **Cost structure** | Domains $10–$15/yr each; hosting free; optional keyword tool $0–$30/mo; time ~30 min/site. |

---

## 3. Market Analysis

| Metric | Insight |
|--------|---------|
| **Search volume** | Utility queries ("word unscrambler", "phone number generator", "random name generator") each attract **10k–500k** monthly searches. |
| **Competition** | A gap-check (Google first-page → look for low-trust new sites) reveals many opportunities with **KD ≤ 10**. |
| **Geography** | Tier-1 countries (US, UK, CA, AU) provide the highest RPM ($8–$12). |
| **Revenue benchmark** | Sleep calculator ~$9k/mo; IP-lookup ~$111k/mo; Calculator.net ~$825k/mo — all simple ad-display models. |
| **Growth drivers** | AI-driven site generation → ultra-fast entry; evergreen demand for calculators/generators; free static-host scaling = zero server-cost ceiling. |
| **Risks** | AdSense policy changes; Google algorithm updates penalising thin content; domain-availability bottlenecks. |
| **Mitigation** | Build minimum viable content (150–200 words + FAQ schema); internal linking across portfolio; keep a domain-alternatives list (hyphens, .online, .app). |

---

## 4. Financial Projections

| Period | # Sites | Avg Monthly PV/Site | Avg RPM | Ad Revenue | Referral Income | Net Revenue |
|--------|---------|---------------------|---------|------------|-----------------|-------------|
| Month 1 | 1 | 20k | $5 | $100 | $0 | **$100** |
| Month 2 | 3 | 35k | $5 | $525 | $30 | **$555** |
| Month 3 | 5 | 50k | $6 | $1,500 | $80 | **$1,580** |
| Month 4 | 8 | 70k | $7 | $3,920 | $150 | **$4,070** |
| Month 6 | 12 | 100k | $8 | $9,600 | $300 | **$9,900** |
| Month 12 | 20 | 130k | $9 | $23,400 | $800 | **$24,200** |

*Assumes ~30% of traffic from organic search after SEO work; the rest from direct/referral.*

### Cost Summary (Year 1)

| Item | Approx. Cost (USD) |
|------|--------------------|
| Domains (5 × $12) | $60/yr |
| Static hosting (free tier) | $0 |
| Keyword tool (optional) | $0–$30/mo |
| Google AdSense | $0 |
| Hermes Agent (open-source) | $0 |
| **Total first-year estimate** | **$60–$120** (excl. optional keyword tool) |

---

## 5. Risk Assessment & Mitigation (Hermes-specific)

| Risk | Hermes-related cause | Mitigation |
|------|----------------------|------------|
| **AdSense rejection** | Hermes may insert non-compliant code (duplicate meta tags). | Run `seo_optimize_utility_site` with `--dry-run` first; verify final HTML before commit. |
| **Domain unavailability** | Rapid rollout hits taken `.com` names. | Keep an alternatives column in `keywords.xlsx`. Prompt Hermes for available alternatives. |
| **Static-host quota** | Netlify free tier limits 100 GB bandwidth/mo. | Monitor dashboards; move high-traffic sites to Vercel. |
| **Toolset mis-config** | `web`/`terminal` toolset disabled → automation fails. | `hermes tools list` before each batch; `hermes tools enable web terminal`. |
| **Credential leakage** | Malformed `write_file` exposes secrets. | Keep `security.redact_secrets` enabled; `read_file index.html` after commit. |
| **Search de-indexing** | Thin/duplicate content across sites. | Enforce ≥150-word unique description per site; add canonical tags. |
| **Algorithm updates** | Penalise ad-only/no-substance sites. | Quarterly content upgrades via Hermes (`UpdateContent` goal). |

---

## 6. Success Metrics (12-month KPIs)

| KPI | Target |
|-----|--------|
| Live sites | 20 |
| Avg monthly page-views/site | 120k |
| Overall RPM | $9 |
| Monthly ad revenue | $24k |
| Referral commissions | $800/mo |
| Net profit margin | > 85% (domains are the only recurring cost) |
| Avg SERP position (primary keyword) | 2.5 |

---

*See `utility_site_implementation_plan.md` for the step-by-step build, deploy, and SEO workflow.*
