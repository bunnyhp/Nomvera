# Nomvera AI - Product Requirements Document
**Version 1.0 | Confidential**

---

## The One-Liner

Nomvera AI is a managed AI training and evaluation firm that gives frontier model companies access to a pre-vetted, academically credentialed workforce - sourced exclusively from U.S. graduate programs - faster and with greater domain fidelity than any crowdsourced platform can offer.

---

## The Problem

The way AI labs source human intelligence for model training is broken - and everyone in the industry knows it.

The dominant platforms today operate on a crowdsourcing model. They onboard thousands of general-population contributors, run them through lightweight skill assessments, and drop them into complex RLHF workflows that require genuine domain expertise. The result is annotation inconsistency, high rework cycles, and model outputs that reflect the cognitive floor of a crowd rather than the caliber of the researchers building the product.

The issue runs deeper than quality scores. The hardest AI training tasks - comparative preference ranking across multi-step reasoning chains, code evaluation at the function level, safety red-teaming in specialized domains - require people who have spent years developing domain fluency. A crowdsourced contributor who has done freelance writing and passed a platform quiz cannot reliably evaluate whether a model's medical reasoning is sound or whether a code solution handles edge cases correctly.

Meanwhile, the market is at an inflection point. Scale AI's acquisition by Meta has triggered customer flight from its two largest clients - OpenAI and Google - both of whom are urgently seeking alternative vendors with verifiable independence and quality guarantees. The window to capture this demand is narrow. Organizations like these don't stay without a trusted vendor for long.

The talent to serve this demand exists. Tens of thousands of U.S. master's graduates in computer science, mathematics, linguistics, biomedical sciences, and engineering complete their programs each year and enter a labor market that is not moving fast enough to absorb them into traditional employment. They are credentialed, intellectually serious, and available. Nobody has built the infrastructure to deploy them at scale into AI training workflows - until now.

---

## The Users

**Primary: AI Research Lead / Head of Post-Training at a Frontier Lab**

Call them Priya - she leads the post-training data team at a mid-sized AI lab doing competitive work in code generation and math reasoning. She manages a budget of $8–20M annually for RLHF and evaluation data. Her core frustration: she can't trust the output quality from the platforms her predecessors set up. She's re-running tasks, burning budget on QA cycles, and losing time she doesn't have. She needs a vendor she can brief once and trust to deliver to spec.

Priya's decision criteria, in order: (1) verifiable annotator credentials in her target domains, (2) consistent output quality without continuous oversight, (3) a vendor who isn't also serving her direct competitors, (4) pricing she can defend to her VP.

**Secondary: AI Program Manager at an Enterprise Building Internal AI**

A large bank, healthcare system, or defense contractor that is fine-tuning foundation models on proprietary workflows. They don't have Scale's account relationship and don't want it. They need a boutique, trustworthy partner for ongoing model evaluation - someone who can sign an NDA, staff a project team with verifiable credentials, and keep their data out of a shared annotation pool.

**Who this is NOT for**

Startups that need 50,000 labeled images at the lowest unit price. Organizations whose annotation requirements are high volume, low complexity, and well-served by automated tooling. Any company that treats annotation as a commodity procurement exercise.

---

## The Solution

Nomvera AI operates as a managed intelligence firm - not a marketplace, not a platform. We curate, train, and deploy project teams composed exclusively of U.S. graduate-degree holders matched to each client's specific domain requirements.

Here's how it works in practice.

A research lead at an AI lab comes to Nomvera with a scope: they need a team capable of evaluating mathematical proofs for correctness and ranking model responses by reasoning quality, across 2,000 tasks per week. Nomvera matches them with annotators drawn from our standing pool of mathematics and computer science graduate alumni. Those annotators are already cleared through our credential verification process - we've reviewed their transcripts, assessed their domain fluency through structured evaluations, and calibrated their inter-annotator agreement scores on benchmark tasks in the relevant domain.

The project kicks off within five business days. The client receives weekly delivery reports with quality metrics, not just output files. If a specific annotator's performance diverges from the team baseline, Nomvera flags it and resolves it - the client doesn't manage individual contributors. They manage a relationship.

The core service delivery covers four categories:

**RLHF and Preference Data** - Comparative ranking and preference labeling for language model fine-tuning. Our annotators work within client-specified rubrics and can engage with domain-technical tasks that require graduate-level reasoning to evaluate correctly.

**Model Evaluation and Red-Teaming** - Structured adversarial testing, capability benchmarking, and safety evaluation across reasoning, code, instruction-following, and factual accuracy. Red-teaming assignments are staffed with contributors whose domain expertise matches the model's intended deployment domain.

**Specialized Annotation** - Domain-specific data labeling for STEM, legal, medical, financial, and multilingual tasks. Unlike general annotation providers, we don't staff these projects with generalist crowd contributors. Domain projects get domain contributors.

**Training Data Generation** - Structured prompt writing, seed data creation, and synthetic dialogue generation for clients building specialized fine-tuning datasets from scratch.

---

## What We're NOT Building

These boundaries are deliberate, not temporary.

**No open freelancer marketplace.** Nomvera is not a platform where contributors self-register and browse tasks. Every person in our workforce has been recruited through our academic sourcing pipeline and individually vetted. We will not sacrifice this for scale.

**No general-purpose annotation for computer vision.** Bounding boxes, image segmentation, and object detection at volume are a commodity market with established leaders and thin margins. That is not our business.

**No proprietary annotation tooling in version one.** Clients use their own tools or we work within their existing platforms. We are a talent and delivery firm, not a software company - in this phase.

**No offshore workforce model.** All contributors in our network hold degrees from accredited U.S. institutions. This is a quality and compliance guarantee, and it is non-negotiable.

**No multi-tenant data pools.** Each client's projects run in isolation. Their data, rubrics, and contributor teams are not shared with or visible to other clients. This is table stakes for the enterprise segment we're building for.

---

## Market and Competitive Landscape

The AI training data market is valued at $2.82 billion in 2024 and growing at 27.7% annually. By 2029, it reaches $9.58 billion. The primary driver is RLHF demand from frontier model companies, which has outpaced the capabilities of the existing crowdsourced provider model.

The competitive picture has shifted materially in the past twelve months.

Scale AI - the market leader at $1.5B ARR - is now partially owned by Meta. Its largest customers, including OpenAI and Google, have already begun reducing or eliminating their Scale contracts due to data governance concerns. This is the single largest redistribution of spend the AI training market has ever seen, and it is happening right now.

Appen's model is crowdsourced, volume-first, and widely criticized for quality inconsistency on expert-level tasks. Outlier (a Scale subsidiary) has faced public criticism for its contributor experience, uneven task allocation, and unpaid onboarding - undermining annotator quality at the source.

Surge AI represents the closest analog to what Nomvera is building - a quality-first positioning with advanced-degree annotators - and bootstrapped to $1.2B in revenue in 2024. That validates the thesis. Their vulnerability is their lack of structured academic sourcing pipeline and their broad TAM approach.

Nomvera's wedge is precision: a pre-built, continuously replenished pipeline of verified graduate talent, deployable into specialized domains faster than any competitor, at a cost structure that reflects the efficiency of direct academic sourcing rather than marketplace markup.

**Why now**: The Meta-Scale event has created urgent vendor diversification demand from the biggest spenders in the market. Academic hiring timelines have extended. Graduate talent is available and motivated. The infrastructure investment required to operationalize this has come down materially. These three conditions converge in 2025 and won't last indefinitely.

---

## Core User Flows

**Flow 1: Client Engagement and Project Scoping**

Entry: Inbound inquiry via website or referral
1. Discovery call with Nomvera client lead (45 min)
2. Client submits project brief: domain, task type, volume, timeline, output format
3. Nomvera performs internal feasibility assessment against available contributor pool
4. Proposal delivered within 48 hours: team composition, credentials overview, delivery timeline, pricing
5. NDA execution and project kickoff
Exit: Signed engagement, project team assigned

**Flow 2: Contributor Onboarding and Credential Verification**

Entry: Outreach to candidate in academic sourcing pipeline
1. Academic credential review (transcript verification, degree confirmation)
2. Domain fluency evaluation - structured written assessment in relevant subject area
3. Annotation calibration exercise - contributor completes benchmark tasks; agreement score calculated against gold standard
4. Agreement score threshold met → contributor activated in relevant domain pool
5. Contributor assigned to project team based on domain match and availability
Exit: Contributor is active and deployable on matched project types

**Flow 3: Active Project Delivery**

Entry: Project kickoff with client
1. Project lead briefs contributor team on rubric, examples, and quality criteria
2. Batch delivery begins - weekly cadence, volume per agreement
3. Internal QC review before each delivery: inter-annotator agreement check, outlier flagging
4. Delivery package sent to client: annotated data + quality report
5. Client review period; revision requests handled within 48 hours
Exit: Full delivery, project closed or transitioned to retainer

**Flow 4: Ongoing Retainer Account Management**

Entry: Client completes initial project with satisfactory outcome
1. Nomvera proposes standing retainer: reserved contributor capacity, priority onboarding for new task types
2. Retainer establishes SLA for weekly volume, quality thresholds, and escalation path
3. Monthly business reviews - performance metrics, upcoming domain needs, team adjustments
Exit: Renewed retainer term or expansion to additional service categories

---

## Success Metrics

**Quality Rate (Primary)**
Target: ≥94% inter-annotator agreement on client-delivered batches within 90 days of first delivery.
Why this metric: It's the single number that determines whether our differentiation is real or theoretical. Every other number is downstream of this one.

**Time-to-First-Delivery**
Target: ≤10 business days from signed agreement to first batch delivery for in-pool domains; ≤20 days for domains requiring targeted sourcing.
Why this metric: The speed of our pipeline is a core selling point. If it takes 8 weeks to staff a project, we're not differentiated - we're just expensive.

**Client Retention Rate (6-Month)**
Target: ≥80% of clients convert to retainer or re-engage within 180 days of initial project close.
Why this metric: The managed services model only compounds if clients come back. One-off project revenue doesn't build the business.

---

## Risks and Open Questions

**Risks worth naming:**

*Workforce pipeline concentration.* Our sourcing advantage depends on maintaining relationships with university career offices and graduate networks. If those relationships underperform, our fill rate drops. Mitigation: build pipeline redundancy across at least 12 institutions before reaching $2M ARR.

*Quality at volume.* Managing inter-annotator consistency across 50+ contributors is operationally different from managing it across 10. The QC process that works at launch may not scale without tooling investment. We need to solve this before it becomes a client-facing problem.

*Domain mismatch on first projects.* Early clients will test us in domains where our pool is thinner than we'd like. We cannot oversell coverage we don't have - one failed delivery in a specialized domain can end the relationship and the reference.

*Pricing pressure from commodity competitors.* Scale, Appen, and Outlier will undercut us on per-unit pricing for any task type that can be commoditized. We need to stay in contract structures where quality and accountability matter more than headline price.

**Open questions the team must resolve:**

- What credential verification process can we defend to a compliance-conscious enterprise client? (SOC 2, background check requirements, etc.)
- How do we price RLHF engagements - per task, per hour, or per project? What does the market support?
- Do we build contributor management tooling internally or use an existing platform (Labelbox, Argilla) from the start?
- What is our minimum viable client size - is $50K a reasonable floor, or does $25K make sense to build references faster?
- How do we handle clients whose NDA requirements conflict with our ability to reuse contributor training materials across engagements?

---

## Milestones and MVP Definition

**MVP Definition**

Nomvera AI's MVP is the ability to staff, brief, and deliver a RLHF evaluation project from end to end - with an annotated dataset, quality report, and client satisfaction rating - within 30 days of kickoff. The contributor team is drawn from an initial pool of 40–60 vetted graduate-degree contributors across at least four domains: mathematics/reasoning, software engineering, biomedical sciences, and general academic writing. The delivery process is managed entirely by the Nomvera team, with no client involvement in contributor management.

**Phase 1 - Foundation (Weeks 1–8)**
Build initial contributor pool of 60 vetted contributors across 4 domains. Establish academic sourcing relationships with 5 university graduate networks. Define and document the credential verification and calibration workflow. Execute 2–3 pilot projects at below-market pricing in exchange for detailed feedback and written references.

**Phase 2 - Commercial Launch (Weeks 9–16)**
First paying clients onboarded. Standard agreement templates, NDA, and SOC 2 readiness assessment complete. Client-facing delivery framework finalized: intake process, quality reporting format, escalation path. Target: $150K in signed project commitments.

**Phase 3 - Retainer Infrastructure (Weeks 17–26)**
First retainer clients converted. Reserved contributor capacity model operational. Monthly business review process established. Contributor pool expanded to 120+ across 6 domains. Target: 3 active retainer accounts, $40K+ monthly recurring revenue.

**Phase 4 - Scale and Specialization (Month 7–12)**
Expand into two new vertical segments (e.g., legal/compliance, defense/government). Explore white-label delivery partnerships with AI tooling companies. Evaluate proprietary project management tooling based on operational pain points identified in Phase 1–3. Target: $1M ARR, 80%+ client retention on cohort.
