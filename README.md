# Suggestion Box

> A transparent decision-making platform that helps organizations collect ideas, facilitate structured reviews, evaluate evidence, and publish permanent decision records.

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)

---

## Overview

Suggestion Box is an enterprise SaaS platform designed to transform how organizations make decisions.

Instead of treating suggestions as simple comments or feature requests, Suggestion Box guides every idea through a structured, transparent review process that captures discussions, evidence, reviewer decisions, and final verdicts.

Every decision becomes a permanent organizational record that can be referenced long after the discussion ends.

---

## Why Suggestion Box?

Traditional suggestion systems often suffer from:

- Lost ideas
- Poor transparency
- Unclear ownership
- Missing evidence
- Inconsistent decision making
- No historical accountability

Suggestion Box solves these challenges by providing a structured workflow where every suggestion is reviewed, evaluated, documented, and concluded with a transparent verdict.

---

# Core Features

## 💡 Suggestion Management

- Create suggestions
- Save drafts
- Rich text editor
- File attachments
- Public or group visibility
- Suggestion categories
- Search and filtering
- Watching suggestions

---

## 👥 Collaboration

- Threaded discussions
- Mentions
- Evidence sharing
- Challenges
- Concerns
- Activity timeline
- Comment reactions

---

## ⚖ Structured Review Workflow

Every suggestion follows a standardized review process.

### Frame

The reviewer defines:

- Assumptions
- Risks
- Constraints
- Success measures
- Evidence requests

### Resolve

The reviewer works through:

- Evidence
- Open concerns
- Primary goal evaluation
- Blocking issues

### Decide

The reviewer publishes an official verdict supported by documented reasoning and evidence.

---

## 📄 Permanent Decision Records

Every completed review generates a permanent decision record containing:

- Final Verdict
- Supporting Evidence
- Reviewer Reasoning
- Conditions
- Trade-offs
- Lessons Learned
- Risks Accepted
- Decision Timeline

---

## 📊 Unified Dashboard

Every user shares the same dashboard.

The interface adapts based on permissions instead of displaying different dashboards.

The dashboard answers three questions:

- What needs my attention?
- What changed recently?
- What should I do next?

---

## 🔔 Notification Center

Personalized notification inbox with:

- Mentions
- Reviewer assignments
- Verdicts
- Comments
- Evidence requests
- Organization updates

---

## 👤 User Account

Users can manage:

- Profile
- Security
- Preferences
- Active Sessions

---

## ⚙ Administration

Organization administrators can manage:

- Organization Settings
- Members
- Groups
- Billing
- Audit Log

---

# Workflow

```
Draft
   │
   ▼
Live
   │
   ▼
In Review

 Frame
    │
 Resolve
    │
 Decide

   ▼
Verdict Ready
   │
   ▼
Complete
```

---

# User Roles

## Member

Members can:

- Create suggestions
- Edit drafts
- Participate in discussions
- Upload evidence
- Follow suggestions
- Receive notifications

---

## Reviewer

Reviewers can:

- Frame suggestions
- Evaluate evidence
- Resolve review items
- Publish verdicts
- Request additional information

---

## Administrator

Administrators can:

- Manage organization settings
- Invite members
- Assign reviewers
- Manage groups
- View audit logs
- Configure permissions

---

# Design Philosophy

Suggestion Box is inspired by modern productivity software.

Rather than behaving like a traditional enterprise system, it focuses on clarity, simplicity, and transparency.

Design inspirations include:

- GitHub
- Linear
- Notion
- Slack
- Jira
- Stripe

---

# Design System

## Typography

Primary Font

```
Geist
```

Fallback

```
Inter
```

Icons

```
Lucide Icons
```

---

## Color Palette

### Primary

```
Emerald
#0F766E
```

### Background

```
#F8FAFC
```

### Surface

```
#FFFFFF
```

### Text

```
#0F172A
```

### Borders

```
#E2E8F0
```

### Semantic Colors

| State | Color |
|---------|----------|
| Draft | Slate |
| Live | Emerald |
| In Resolution | Amber |
| Verdict Ready | Teal |
| Complete | Green |
| Blocked | Red |

---

# Application Structure

```
Dashboard
│
├── Suggestions
│     ├── Suggestion Details
│     ├── Discussion
│     ├── Evidence
│     ├── Decision Workspace
│     └── Verdict
│
├── Notifications
│
├── Administration
│     ├── Organization
│     ├── Members
│     ├── Groups
│     ├── Billing
│     └── Audit Log
│
└── My Account
      ├── Profile
      ├── Security
      ├── Preferences
      └── Sessions
```

---

# Guiding Principles

Every design decision follows these principles.

### Transparency

Every decision should be understandable.

### Accountability

Every action should have ownership.

### Collaboration

Every stakeholder should participate constructively.

### Evidence First

Opinions should be supported by evidence whenever possible.

### Permanent Knowledge

Completed decisions become organizational knowledge rather than disappearing in chats or emails.

---

# Future Roadmap

- AI-assisted review summaries
- AI-generated evidence insights
- Workflow automation
- API integrations
- Microsoft Teams integration
- Slack integration
- Email workflows
- Advanced analytics
- Mobile applications
- Public suggestion portals
- SSO (SAML & OAuth)
- Webhooks
- Custom workflows
- Enterprise compliance

---

# Technology Stack

## Frontend

- React
- Material UI
- React Router
- React Query
- Zustand

## Backend

- Ruby on Rails API
- PostgreSQL
- Redis
- Sidekiq

## Authentication

- Devise JWT

## Storage

- Active Storage

## Infrastructure

- Docker
- Nginx
- AWS
- GitHub Actions

---

# Vision

> **To become the most trusted platform for transparent organizational decision-making.**

Suggestion Box empowers organizations to move beyond informal discussions and disconnected feedback by providing a structured, collaborative, and accountable decision-making process that transforms every idea into lasting organizational knowledge.

---

## License

MIT License

Copyright © 2026 Suggestion Box
