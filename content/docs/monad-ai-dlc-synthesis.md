---
title: "Monad-AI-DLC Synthesis"
description: "Not Alignment, But Aspirational Synthesis"
---

> **Monad becomes AI-driven in workflow initiative and execution, EOS-governed in control, human-sovereign in consequential decision authority, and evidence-driven in acceptance.**

AWS introduced AI-DLC publicly on **July 31, 2025**. Its core mental model is that AI initiates workflows, creates plans, asks for clarification, and executes after human validation; later AWS material made the workflow explicitly adaptive in both which stages are used and how deeply they are performed. ([Amazon Web Services, Inc.][1]) The open-source implementation further records decisions and approvals, adapts rigor to complexity, and carries context forward across the lifecycle. ([Amazon Web Services, Inc.][2])

## 1. Formal definition

**Monad AI-Driven Engineering Operating Model — MADEOM**

normative formulation:

MADEOM = Monad Semantic Authority + EOS Governance + AI-Driven Workflow Initiative + Bounded AI Execution + Human Sovereignty + Evidence-Based Closure 

subject to:

AI Initiative \neq AI Authority

and:

AI Output \neq Canonical Engineering Truth

until an appropriate Monad authority transition makes it so.

The fundamental control loop becomes:

**Intent → Context → Plan → Clarify → Decide → Authorize → Execute → Verify → Review → Integrate/Operate → Observe → Learn → Replan**

The roles in that loop are deliberately asymmetric:

| Function                                 | Primary actor                  | Monad rule                                   |
| ---------------------------------------- | ------------------------------ | -------------------------------------------- |
| State desired outcome                    | Human/product authority        | AI may help elaborate it                     |
| Compile relevant engineering context     | Monad + AI                     | Derived from governed knowledge              |
| Propose development pathway              | AI                             | Must be explainable and policy-constrained   |
| Select stage breadth/depth               | AI proposes                    | Policy/human may override                    |
| Surface ambiguities                      | AI                             | Must not silently assume consequential facts |
| Generate alternatives                    | AI                             | Advisory                                     |
| Make consequential decisions             | Human authority                | Recorded as `DEC-*` / `APR-*`                |
| Decompose authorized work                | AI + EOSP                      | Canonical result becomes PI/WC/WP structure  |
| Execute work                             | AI/automation/native tools     | Only within authorized scope                 |
| Self-check implementation                | Executor                       | Insufficient as final verification           |
| Verify                                   | EOSV/validators                | Evidence-based                               |
| Independent review                       | Human and/or independent agent | Policy determines independence requirement   |
| Accept risk/release/architecture changes | Human authority                | Never inferred from model confidence         |
| Record lineage                           | EOS                            | `TRC-*`, evidence, executions, events        |
| Feed operational learning back           | Monad + AI                     | Derived knowledge until governed             |

That gives us a useful short formula:

> **AI drives the work. EOS governs the work. Humans govern consequential meaning and authority. Evidence governs acceptance.**

That is materially stronger than either “AI-assisted development” or “AI-autonomous development.”

---

# 2. What Monad should take from AWS AI-DLC

AWS AI-DLC has several ideas that fit Monad extremely well. AWS says AI should create plans, seek clarification, and implement following human validation. It also persists context across phases and now promotes adaptive workflows rather than hard-wired lifecycle sequences. ([Amazon Web Services, Inc.][1])

The Monad translation should be:

| AI-DLC idea                           | Monad-native interpretation                                          | Disposition                      |
| ------------------------------------- | -------------------------------------------------------------------- | -------------------------------- |
| AI initiates workflow                 | AI may initiate/propose the next governed engineering action         | **Adopt**                        |
| AI creates plans                      | AI proposes EOSP plan/decomposition                                  | **Adopt**                        |
| AI seeks clarification                | AI identifies unresolved decisions/requirements rather than guessing | **Adopt strongly**               |
| Humans make critical decisions        | Existing Monad authority + `DEC-*` + `APR-*`                         | **Adopt strongly**               |
| AI executes approved plans            | EOSE bounded execution                                               | **Already native**               |
| Human verifies outcome                | EOSV + EOSR + accountable owner                                      | **Already stronger in Monad**    |
| Adaptive workflow breadth             | AI proposes which engineering activities are necessary               | **Adopt**                        |
| Adaptive workflow depth               | Rigor proportional to risk/complexity/evidence                       | **Adopt**                        |
| Persistent context                    | Semantic graph + governed artifacts + bounded context package        | **Adapt**                        |
| End-to-end traceability               | `TRC-*`, `EVID-*`, execution/event ledger                            | **Already stronger**             |
| Inception / Construction / Operations | Map onto existing EOS layers                                         | **Translate, don't adopt**       |
| Units of Work                         | Work Packets                                                         | **Reject duplicate terminology** |
| Bolts                                 | Existing WP/WC cadence                                               | **Reject as canonical concept**  |
| Mob Elaboration / Mob Construction    | Optional collaborative decision/review mode                          | **Adapt, not mandate**           |
| Q/Kiro steering files                 | Provider-neutral Monad policy/context contracts                      | **Adapt**                        |
| Conversation history as audit         | Structured decisions/approvals/evidence; transcript optional         | **Reject as canonical state**    |

There is one subtle difference I would preserve deliberately. AWS sometimes explains human decision ownership in terms of humans possessing business context. Monad should instead ground it in **accountability and delegated authority**. An AI may eventually possess enormous context and outperform a person analytically; that still does not give it the authority to accept existential risk, redefine product intent, change governance, or make irreversible commitments.

That distinction makes Monad more durable as models improve.

---

# 3. Relationship to EOS

MADEOM should **not** become a ninth EOS lifecycle layer.

Instead, it is an operating model spanning the existing eight layers.

| EOS layer | MADEOM behavior                                                                      |
| --------- | ------------------------------------------------------------------------------------ |
| **EOSB**  | Establish policies, harnesses, authority, semantic context, validators               |
| **EOSP**  | AI elaborates intent, identifies uncertainty, proposes adaptive pathway and WP graph |
| **EOSE**  | AI executes approved work using bounded harness contracts                            |
| **EOSV**  | Deterministic and independent evidence verifies results                              |
| **EOSR**  | Humans/independent reviewers judge conformity, tradeoffs and acceptance              |
| **EOSC**  | AI-discovered requirement/architecture/specification changes become governed CRs     |
| **EOSL**  | Approved/reviewed changes move through release authority                             |
| **EOSM**  | Operations and maintenance evidence feeds new intent/context back into EOSP          |

The existing EOS loop therefore remains:

`EOSP → EOSE → EOSV → EOSR`

but gains an inner AI-driven control loop:

`PROPOSE → CLARIFY → DECIDE → APPROVE → EXECUTE → VERIFY`

The important point is that **the AI loop runs inside EOS authority rather than replacing EOS**.

This is exactly consistent with `ADR-0006-eos-sovereignty-and-external-sdlc-assimilation.md`, which already says external methodologies may donate useful concepts but may not introduce a competing lifecycle state, dependency graph, task hierarchy, evidence store, approval system, or execution authority.

---

# 4. The operating invariants

I would make these normative MADEOM invariants.

| ID             | Invariant                                                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **MADEOM-I01** | Every engineering execution MUST trace to an authorized engineering intent/outcome.                                                      |
| **MADEOM-I02** | AI MAY initiate analysis, planning, clarification and proposed workflow transitions without thereby obtaining authority to approve them. |
| **MADEOM-I03** | AI MUST surface material ambiguity instead of silently resolving product, architecture, security, governance or irreversible decisions.  |
| **MADEOM-I04** | The engineering pathway MUST be adaptive to intent, risk, complexity, existing evidence and repository state rather than hard-wired.     |
| **MADEOM-I05** | Skipped or deepened lifecycle activities MUST be explainable.                                                                            |
| **MADEOM-I06** | Consequential decisions MUST resolve through existing Monad authority and `DEC-*` / `APR-*` semantics.                                   |
| **MADEOM-I07** | No AI-generated statement becomes canonical merely because an agent produced it confidently or repeatedly.                               |
| **MADEOM-I08** | Execution MUST occur within an authorized WP, scope, capability, environment and autonomy boundary.                                      |
| **MADEOM-I09** | Governing-input drift invalidates the execution contract and returns control to planning/change control.                                 |
| **MADEOM-I10** | Executor assertions and self-tests are evidence inputs, never sufficient proof by themselves.                                            |
| **MADEOM-I11** | Independent review MUST be enforceable where consequence/risk requires it.                                                               |
| **MADEOM-I12** | Every consequential plan, decision, approval, execution, verification and resulting change MUST be reconstructably traceable.            |
| **MADEOM-I13** | Raw model transcripts MUST NOT be required canonical engineering state.                                                                  |
| **MADEOM-I14** | AI provider, model and harness identity MUST NOT become semantic authority.                                                              |
| **MADEOM-I15** | Increased autonomy MUST be earned through evidence, explicitly granted and reversibly revocable.                                         |
| **MADEOM-I16** | Operations and maintenance evidence SHOULD feed subsequent planning/context without automatically becoming normative truth.              |

This is essentially the constitution of the operating model.

---

# 5. Existing product requirements that should change

The current `product/product-requirements.md` already contains far more of MADEOM than I initially expected. This should therefore be an **incremental requirements change**, not a rewrite.

### Amend these existing requirements

| Existing requirement                                                   | Required change                                                                                                                                                                                       |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **FR-007 — Produce bounded agent context**                             | Add current intent/outcome, unresolved decisions, applicable `DEC-*`/`APR-*`, selected adaptive pathway, rationale for skipped/deepened activities, execution/autonomy policy and context provenance. |
| **FR-012 — Unify memory, intelligence, and execution**                 | Make the `intent → context → plan → clarify → approve → execute → verify → learn` feedback loop explicit. State that AI may drive the loop but canonical transitions remain governed.                 |
| **FR-013 — Maintain anti-hallucination engineering memory**            | Explicitly state that AI-DLC-style persistent context is reconstructed from governed artifacts/evidence and classified memory. Raw conversations must not silently become canonical context.          |
| **FR-014 — Orchestrate dependency-aware agent work**                   | Require orchestration to consume an authorized adaptive pathway and dispatch frontier. AI may recommend dispatch; it may not self-authorize blocked/dependent work.                                   |
| **FR-015 — Enforce progressive autonomy**                              | Add the critical distinction **initiative ≠ authority**. Higher initiative in planning does not require higher authority; execution/approval powers still follow autonomy policy.                     |
| **FR-016 — Support cross-harness review**                              | Add enforceable executor/reviewer independence rules and policy-defined separation where consequence warrants it.                                                                                     |
| **FR-023 — Provide declarative governance, change control, and audit** | Explicitly include plan versions, clarification requests, human responses, decision records, approval/denial, pathway changes and missing-approval fail-closed behavior.                              |
| **FR-024 — Provide operational health and execution observability**    | Add pathway/stage, planning/refinement iterations, approval latency, blocked-decision time, executor/reviewer identity and replan counts.                                                             |
| **QR-008 — Progressive trust**                                         | Clarify that trust regulates authority/capability rather than whether AI may analyze or propose.                                                                                                      |
| **QR-010 — Auditability**                                              | Add reconstruction of AI-proposed plans, material clarification exchanges, pathway decisions and approvals.                                                                                           |

### One genuinely new functional requirement is justified

The existing requirements do **not** quite capture AI-DLC's adaptive breadth/depth principle. Putting it entirely into FR-014 would make “orchestration” own planning semantics it should not own.

I therefore recommend the next requirement:

**FR-037 — Provide adaptive AI-driven engineering workflow planning**

Its normative core should be approximately:

> Monad MUST derive or assist in deriving a proposed engineering pathway from stated intent, governed repository context, lifecycle state, risk, complexity, dependencies, outstanding decisions and applicable policy. The pathway MAY select, omit, reorder or deepen optional engineering activities where permitted, but MUST preserve mandatory EOS authority and lifecycle invariants. Its rationale MUST be inspectable; consequential decisions MUST be surfaced for authorized human disposition; execution MUST NOT begin beyond the authority actually granted.

That is the single most important new requirement.

We will **not** create separate requirements for “AI asks questions,” “humans approve,” “persistent context,” or “AI verification.” Those concerns already have correct homes in FR-007, FR-012/013, FR-015, FR-023 and EOSV.

---

# 6. ADR disposition

This is where the current repository rules change the answer significantly.

`architecture/decisions/README.md` says:

> accepted ADRs are immutable in decision meaning; materially changed decisions receive a new ADR.

Therefore:

### ADR-0006 must not be substantively amended

`ADR-0006 — EOS Sovereignty and External SDLC Assimilation` should remain exactly what it is conceptually.

It already establishes:

* EOS remains sovereign;
* external frameworks are design donors;
* human sovereignty;
* bounded autonomy;
* deterministic-first evaluation;
* replaceable harnesses;
* independent review;
* richer provenance;
* progressive autonomy;
* no second authoritative state.

AWS AI-DLC reinforces this decision; it does not invalidate it.

After the new ADR is accepted, ADR-0006 can receive only a **non-semantic `Related:` cross-reference** if desired.

### Create ADR-0007

**`architecture/decisions/ADR-0007-ai-driven-engineering-operating-model.md`**

Title:

**ADR-0007 — AI-Driven Engineering as the Default EOS Operating Model**

Its decision should be:

> Monad SHALL treat AI-driven, human-governed engineering as the preferred operating model for engineering activities where suitable AI capability is available. AI may initiate workflow analysis, propose adaptive engineering pathways, seek clarification, generate artifacts and execute authorized work. EOS remains the sole lifecycle/control plane; accountable human authority retains consequential decision rights; deterministic policy and evidence govern authorization and acceptance. AI-assisted and bounded-autonomous modes remain valid execution profiles inside this model rather than competing lifecycle methodologies.

ADR-0007 should **not supersede ADR-0006**.

The relationship is:

`ADR-0006 constrains external-method assimilation`

↓

`ADR-0007 chooses the resulting Monad-native AI-driven operating model`

This is cleaner architecture governance than rewriting ADR-0006.

---

# 7. Current specifications

The live `specifications/` tree is much smaller than the historical Monad corpus. On the inspected `main`, the active behavioral specifications are essentially:

`MKE-CORE-0001`, `DATA-SOURCE-0001`, `IFC-WORKSPACE-0001`, `TECH-WORKSPACE-0001`, `TECH-INGEST-0001`, `TECH-INGEST-0002`, and `TECH-INGEST-0003`, plus `SPEC-BASE-0001`.

The older MSC documents we worked on previously are therefore **not current-main normative amendment targets** in this analysis.

### Existing specification amendments

Only one current specification artifact needs immediate amendment:

| Artifact                                            | Disposition                                                                                                                                                                                     |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`SPEC-BASE-0001` — `specifications/baseline.md`** | **Amend.** Its governing requirements and required specifications are still `TBD`; use it to establish the new AI-engineering specification tranche and trace FR-007/012–016/023/024/037 to it. |

The existing MKE, ingestion, workspace and source-identity specifications should **not be changed**. MADEOM operates above them. Modifying them would contaminate the deterministic knowledge kernel with workflow concerns—the exact architectural mistake Monad is designed to avoid.

---

# 8. Genuinely new specifications

**Three** new specifications initially.

| Proposed artifact                                                                     | Purpose                                                                                                                                                       | Why genuinely new                                                                                     |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **`specifications/functional/FUN-AIENG-0001-adaptive-engineering-workflow.md`**       | Defines adaptive pathway generation, optional/mandatory activity selection, clarification cycle, plan refinement, replan triggers and EOS mappings.           | No existing spec owns adaptive engineering workflow behavior.                                         |
| **`specifications/interfaces/IFC-AIENG-0001-engineering-agent-contract.md`**          | Defines the provider-neutral context → plan → authorization → execution → result/review handoff contract, including fingerprints and harness identity.        | EOSE describes the concept, but there is no stable cross-harness interface specification.             |
| **`specifications/security/SEC-AIENG-0001-autonomy-authority-and-approval-gates.md`** | Defines autonomy levels, human decision boundaries, approval requirements, fail-closed behavior, reviewer independence, capability escalation and revocation. | Governance describes authority abstractly, but FR-015/023 need a precise verifiable control contract. |

We will **not** create `PLAN-*`, `CLARIFICATION-*`, `AI-DECISION-*`, `AI-APPROVAL-*`, or `AI-EVIDENCE-*` entity families.

The current EOS canonical domain model already gives us:

`DEC-*` — Decision
`APR-*` — Approval
`DEP-*` — Dependency
`TRC-*` — Trace Edge
`EVID-*` — Evidence
`REV-*` — Review
plus WP/WC/PI and provenance.

That is enough.

A proposed AI plan should compile into ordinary Monad planning objects and relationships. A material clarification either resolves existing knowledge or becomes a requirement/decision. Approval becomes `APR-*`. Execution produces normal execution/evidence records.

That is exactly what “engineering knowledge compilation” should mean.

---

# 9. Existing EOS/governance artifacts that require amendment

These are not new product requirements or ADRs, but MADEOM cannot become operational without changing them.

| Artifact                                 | Required amendment                                                                                                                                                                                                            |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`EOS-LIFECYCLE-0001`**                 | Define MADEOM as a cross-layer operating model and document the inner `plan → clarify → decide → approve → execute → verify` loop. Explicitly state it is not a ninth EOS layer.                                              |
| **`EOSP`**                               | Make AI-proposed adaptive pathway generation, ambiguity discovery, decision closure and evidence-based workflow depth part of planning.                                                                                       |
| **`EOSE`**                               | Replace the Codex-shaped conceptual contract with a generic executor/harness role; require approved-plan/context fingerprints and `APR-*` authorization where applicable. Keep `eos codex` as an adapter/convenience command. |
| **`EOSV-V2`**                            | Record executor/model/harness/config provenance and make explicit that executor self-verification is not sufficient independent evidence.                                                                                     |
| **`EOSR`**                               | Add policy-driven human/cross-harness independence and disposition of AI/human disagreement.                                                                                                                                  |
| **`EOSC`**                               | State that material AI-discovered requirement/spec/architecture changes automatically leave execution and become proposals/CRs rather than plan mutations.                                                                    |
| **`GOV-PLAN-0001`**                      | Add adaptive pathway selection, breadth/depth rationale, complexity/risk classification and planning recommendations.                                                                                                         |
| **`GOV-EXEC-0001`**                      | Add generic executor identity, approved plan fingerprint, autonomy level, capability grant, model/harness configuration and plan-drift handling.                                                                              |
| **`GOV-POLICY-0001`**                    | Add predicates for required decisions, required approvals, autonomy level, reviewer independence, unresolved ambiguity, plan fingerprint and authority class.                                                                 |
| **`governance/authority.md`**            | Introduce an explicit non-accountable **AI/Automation Actor** category: may exercise delegated capability but cannot independently hold human-sovereign accountability.                                                       |
| **`governance/decision-process.md`**     | Define what AI may do at Frame/Gather/Develop/Evaluate stages versus who may perform `Decide`; allow explicitly delegated low-consequence decisions while preserving Class 2/3 authority.                                     |
| **`engineering/definition-of-ready.md`** | Require adaptive-pathway rationale, closure of material AI-raised ambiguities and all required plan/authority approvals before authorization.                                                                                 |

Two notable **non-changes** are equally important.

`GOV-STATE-0001 — Canonical EOS State Model` should remain conceptually unchanged: `.eos/state/current.json` remains the sole current operational state. AI workflow state must not become another authority.

Likewise, `.eos/domain-model.json` does **not** currently need an AI-specific entity layer. Its existing human-sovereign authority levels and `DEC/APR/DEP/TRC/EVID` primitives are already a strong semantic foundation.

---

# 10. The complete minimum artifact tranche

Putting everything together, we will implement this as one governed EOS change tranche:

| Class                   | Artifact                                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Decision                | **ADR-0007 — AI-Driven Engineering as the Default EOS Operating Model**                                                   |
| Operating model         | **EOS-AI-0001 — Monad AI-Driven Engineering Operating Model**                                                             |
| Requirement             | **FR-037 — Adaptive AI-Driven Engineering Workflow Planning**                                                             |
| Requirement amendments  | FR-007, 012, 013, 014, 015, 016, 023, 024; QR-008, QR-010                                                                 |
| Functional spec         | **FUN-AIENG-0001 — Adaptive Engineering Workflow**                                                                        |
| Interface spec          | **IFC-AIENG-0001 — Engineering Agent Contract**                                                                           |
| Security/control spec   | **SEC-AIENG-0001 — Autonomy, Authority and Approval Gates**                                                               |
| Baseline                | Amend **SPEC-BASE-0001**                                                                                                  |
| EOS governance          | Amend the twelve EOS/governance artifacts identified above                                                                |
| Implementation planning | One PI/WC or dedicated WC with WPs for schema/policy, planning, harness contract, verification/review and conformance     |
| Acceptance evidence     | Conformance fixtures demonstrating advisory, AI-driven, bounded-autonomous, blocked/escalated and change-control pathways |

That is the minimum coherent set. Anything substantially larger at this stage starts creating an unnecessary parallel methodology.

---

# 11. What MADEOM means for “AI-assisted” and “AI-autonomous”

This also resolves the question we were discussing earlier.

Monad does **not** need to reject either.

Instead:

$$
\text{AI-assisted} \subset \text{MADEOM}
$$

and:

$$
\text{bounded AI-autonomous execution} \subset \text{MADEOM}
$$

They become **autonomy profiles**, not competing development methodologies.

At one extreme, AI analyzes and advises while a human performs everything.

At another, AI may plan, dispatch, implement, test and prepare a PR without intervention.

The invariant across both extremes is that EOS still knows:

**what authority was granted, by whom, for what scope, based on what decision, using what context, through which executor, producing what change, verified by what evidence, and accepted by what authority.**

That is much more fundamental than “human-in-the-loop.”

It is **governed delegation with reconstructable accountability**.

---

# 12. The architectural conclusion

The best parts of AWS AI-DLC do not require changing Monad's identity. AWS's original methodology deliberately moves beyond merely bolting an assistant onto a human-designed SDLC, while retaining human validation; its later implementation adds adaptive workflow selection, variable rigor and explicit traceability. ([Amazon Web Services, Inc.][1])

Monad can go one step further because it already possesses things AI-DLC has to create procedurally:

* a semantic engineering knowledge model,
* explicit authority,
* first-class decisions and approvals,
* canonical lifecycle state,
* dependency-aware planning,
* bounded execution,
* typed evidence,
* provenance,
* change control,
* progressive autonomy,
* cross-harness review,
* and reconstructable traceability.

So the resulting architecture is not:

**“Monad + AI-DLC.”**

It is:

> **Monad as an Engineering Knowledge Compilation Platform whose Engineering Operating System supports an AI-driven, human-governed, evidence-closed engineering execution model.**

The AI-DLC contribution is primarily the **operating rhythm**: AI should not merely wait to be prompted for isolated tasks. It should actively compile intent and context into the next proposed engineering action, expose uncertainty, ask for the decisions it cannot legitimately make, and continue execution once EOS records the necessary authority.

That is the piece I would formally add to Monad.

**My recommended next artifact is therefore `ADR-0007-ai-driven-engineering-operating-model.md`, followed immediately by `EOS-AI-0001-ai-driven-engineering-operating-model.md`.** The ADR should make the decision; EOS-AI-0001 should define the normative operating model. Only after those two are accepted should we change the requirements and derive the three specifications above.

[1]: https://aws.amazon.com/blogs/devops/ai-driven-development-life-cycle/ "AI-Driven Development Life Cycle: Reimagining Software Engineering | AWS DevOps & Developer Productivity Blog"
[2]: https://aws.amazon.com/blogs/devops/building-with-ai-dlc-using-amazon-q-developer/?utm_source=chatgpt.com "Building with AI-DLC using Amazon Q Developer | AWS DevOps & Developer Productivity Blog"
