# Litigation Workbench

Seven reusable workflows for business litigators in ChatGPT Work and Codex. Install once on your computer, then start a fresh chat for each matter. You choose which files the agent can use. The plugin contains written instructions and an icon. It adds no account connections, executable scripts or Lexis integration.

## Install on your desktop

**[Open the setup page](https://scarson.github.io/litigation-workbench/)** on the computer where you use the ChatGPT desktop app. Select **Open setup in Codex** and send the prefilled request. Approve the marketplace addition and installation if prompted. After installation, start a new local chat in Work or Codex and select **Litigation Workbench** from the plugin picker. A desktop restart may be needed to refresh the list.

You can also paste this request into a local Codex chat yourself:

> Install the latest litigation-workbench@scarson-legal from the scarson/litigation-workbench GitHub repository for my local desktop account. Use the repository’s default branch and refresh any existing registration for this repository. Show me how to select argument-review in a fresh chat.

If you use the Codex CLI, these are the equivalent commands:

```sh
codex plugin marketplace add scarson/litigation-workbench
codex plugin add litigation-workbench@scarson-legal
```

**Already installed?** Check `codex plugin marketplace list`. If `scarson-legal` points to this repository at a fixed tag or commit, run `codex plugin marketplace remove scarson-legal` once and repeat the two commands above. For later updates, run `codex plugin marketplace upgrade scarson-legal` followed by `codex plugin add litigation-workbench@scarson-legal`.

**Without a CLI:** Download the [current source archive](https://github.com/scarson/litigation-workbench/archive/refs/heads/main.zip), extract it and open the extracted folder containing this README as a local desktop project. Restart the app, open Plugins, choose the **Litigation Workbench** marketplace and install the plugin. Check it in a new local chat for a different folder. Keep the extracted folder for marketplace maintenance. [OpenAI marketplace instructions](https://developers.openai.com/plugins/build/plugins)

**For hosted Work on the web:** If your Plugins menu offers plugin ZIP uploads, use the [packaged plugin ZIP](https://github.com/scarson/litigation-workbench/releases/latest/download/litigation-workbench.zip) and install the resulting entry. The source archive above contains the whole marketplace and serves a different purpose. In a managed workspace, an admin can import this repository through **Admin → Plugins → Add → Import marketplace**. Use the repository URL, leave Path blank, and select the default branch (`main`). A desktop install uses the local marketplace. Hosted availability depends on the receiving account and workspace. [Plugin permissions](https://learn.chatgpt.com/docs/enterprise/apps-and-connectors) · [GitHub import](https://learn.chatgpt.com/docs/enterprise/plugin-management)

## Give it a first assignment

The [practical guide to the tools](https://scarson.github.io/litigation-workbench/tools.html) covers what each one provides, copyable examples, and how to check the work. For Anthropic’s plugin, [browse all 19 litigation skills and try a civil claim chart](https://scarson.github.io/litigation-workbench/tools.html#claude-for-legal).

**[Choose the work you want to finish](https://scarson.github.io/litigation-workbench/#first-matter)**. Each of the seven assignments includes what to bring, a copyable prompt and a way to check the result. The same page includes the LegalQuants Litigation, CourtListener and optional Descrybe install links. A browser-only user can use the prompts while sorting out plugin access.

If you cannot use client files in this account, [download the fictional production](https://scarson.github.io/litigation-workbench/practice.html). The later exhibit and worked Excel file are separate. The public-opinion exercise on that page lets you compare two audits against the same reported decision.

Try this in a fresh chat with the plugin selected. The deliberately small example lets you check the result immediately.

> Use damages-reconciliation. On July 1 the ledger shows a $25,000 invoice and a $10,000 receipt applied to it. The contract makes the last $5,000 contingent on a signed acceptance certificate. No certificate is in the supplied record. Assume the other $20,000 was due before July 1 and the receipt applies there. Show the open balance and how much this record supports as due. Give the answer here.

Look for **$15,000 open**, **$10,000 supported as due** and **$5,000 with an unverified trigger**. Then try one of your own approved assignments.

| Choose this skill | A job to give it |
| --- | --- |
| Evidence matrix | Pair each material proposition with its best support, strongest contrary passage and missing proof. |
| Record to deposition | Build an examination around specific admissions, exhibit pinpoints and follow-ups for a qualified answer. |
| Damages reconciliation | Bridge the demand to invoices, payments and contractual triggers. Ask for a formula-driven workbook when useful. |
| Lexis research handoff | Prepare searches for counsel to run in Lexis. Draft from independently obtained primary sources and counsel’s authorized verification notes. |
| Brief audit | Locate the draft sentence that exceeds its source, identify the limiting passage and propose a narrower rewrite. |
| Argument review | Read your original beside a written steelman, get a fresh Astra or Sol xhigh challenge where available, and track each objection into a revised position. [Fictional example and reusable prompt](https://scarson.github.io/litigation-workbench/#argument-review) |
| Case treatment check | Ask whether a case still supports a specific proposition. Read subsequent history and adverse opinions, identify the affected passage, and reconcile counsel’s dated Shepard’s check. [Open the assignment](https://scarson.github.io/litigation-workbench/#good-law) |

Use approved matter sources and retain originals. A local project can still send relevant content to the model service. The public repository contains the plugin; it is never a destination for matter files. [OpenAI local data handling](https://learn.chatgpt.com/docs/enterprise/chatgpt-work-local-security)

[Compare existing open-source legal tools](LEGAL-TOOLS.md)
